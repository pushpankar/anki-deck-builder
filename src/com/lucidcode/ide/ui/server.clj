(ns com.lucidcode.ide.ui.server
  (:require
    [clojure.string :as str]
    [clojure.tools.reader.edn :as edn]
    [io.pedestal.http :as http]
    [io.pedestal.http.body-params :as body-params]
    [io.pedestal.http.route :as route]
    [io.pedestal.http.content-negotiation :as conneg]
    [io.pedestal.http.ring-middlewares :as ring-mw]
    [io.pedestal.interceptor :as interceptor]
    [io.pedestal.websocket :as ws]

    [io.pedestal.interceptor :refer [interceptor]]

    [taoensso.telemere :as tlog]
    [io.pedestal.log :as log]
    [ring.util.response :as resp]
    [clj-http.client :as client]

    [cheshire.core :as json]
    [clojure.core.async :as async :refer [go]]

    [com.lucidcode.ide.bots.anki-book-parser :as book-parser]
    [com.lucidcode.ide.bots.anki-web :as anki-web]
    [com.lucidcode.ide.ui.db :as db]

    [clj-async-profiler.core :as prof]
    [sc.api :as sc]))


(def ws-client (atom nil))
(def in-chan (atom nil))

(defn clean-sockets []
  (when @ws-client
    (async/close! @ws-client))
  (when @in-chan
    (async/close! @in-chan)))

(def supported-types ["text/html" "text/event-stream" "application/edn" "application/json" "text/plain" "application/transit+json"])

(def content-neg-intc (conneg/negotiate-content supported-types))

(def coerce-body
  {:name  ::coerce-body
   :leave (fn [context]
            (let [accepted        (get-in context [:request :accept :field] "text/html")
                  response        (get context :response)
                  body            (get response :body)
                  coerced-body    (case accepted
                                    "text/html" body
                                    "text/event-stream" body
                                    "text/plain" body
                                    "application/edn" (pr-str body)
                                    ;"application/transit+json" (encoder/write-transit body)
                                    "application/json" (json/generate-string body))
                  response-header (if (= accepted "text/event-stream")
                                    {"Content-Type"      accepted
                                     "Cache-Control"     "no-cache"
                                     "X-Accel-Buffering" "no"}
                                    {"Content-Type" accepted})]
              (-> context
                  (update-in [:response :headers] merge response-header)
                  (assoc-in [:response :body] coerced-body))))})


(def add-token-to-headers
  "Interceptor to add a token from query params to request headers."
  (interceptor
    {:name  ::add-token-to-headers
     :enter (fn [context]
              (def context context)
              (let [request (:request context)
                    token   (get-in request [:query-params :token])]
                (if token
                  (assoc-in context [:request :headers "Authorization"] (str "Token " token))
                  context)))}))

(defn echo [{:keys [request]}]
  (resp/response request))

(defn home [request]
  (resp/response (slurp "resources/public/index.html")))

(defn parse-book [request]
  (let [filepath (get-in request [:multipart-params "file" :tempfile])]
    (resp/response {:word-list      (take 300 (book-parser/extract-difficult-words filepath))
                    :ask-for-email? (and (> (db/get-parsed-book-count) 0)
                                         (nil? (db/get-data :user-email)))})))

#_(def add-to-anki
  {:name  ::add-to-anki-interceptor
   :enter (fn [context]
            (let [deck-name (get-in context [:request :json-params :deck-name])
                  words     (get-in context [:request :json-params :words])]
              ;; Although it currently makes sense to properly close the page but this flow is long running process.
              ;; Probably need to handle in async way.
              ;; If you want to update the frontend you can use sente: https://chatgpt.com/c/6791e43b-8034-800b-91fe-cada76694791
              (let [words-map (mapv (fn [[word _ usage & _rest]] [word usage]) words)]
                (db/inc-parsed-book-count)
                (anki-web/create-deck-flow-fsm in-chan @ws-client deck-name words-map))))})

(defn add-to-anki [request]
  (let [deck-name (get-in request [:json-params :deck-name])
        words     (get-in request [:json-params :words])]
    ;; Although it currently makes sense to properly close the page but this flow is long running process.
    ;; Probably need to handle in async way.
    ;; If you want to update the frontend you can use sente: https://chatgpt.com/c/6791e43b-8034-800b-91fe-cada76694791
    (let [words-map (mapv (fn [[word _ usage & _rest]] [word usage]) words)]
      (db/inc-parsed-book-count)
      (anki-web/create-deck-flow-fsm @in-chan @ws-client deck-name words-map))
    (resp/response {:result :adding})))

(defn save-user-email [request]
  (let [user-email (get-in request [:json-params :email])]
    (let [response (client/post "http://40.76.137.53:80/api/save-user-email"
                                {:headers {"Content-Type" "application/json"}
                                 :body    (json/generate-string {:user-email user-email})})]
      (when (= (:status response) 200)
        (db/save-data :user-email user-email)))
    (resp/response {:result :ok})))

(def routes
  (route/expand-routes
    #{["/" :get [coerce-body content-neg-intc home] :route-name :home]
      ["/echo" :get [coerce-body content-neg-intc echo] :route-name :echo]
      ["/parse-book" :post [coerce-body content-neg-intc (body-params/body-params) (ring-mw/multipart-params) parse-book] :route-name :parse-book]
      ["/add-words-to-anki" :post [coerce-body content-neg-intc (body-params/body-params) add-to-anki] :route-name :add-words-to-anki]
      ["/save-user-email" :post [coerce-body content-neg-intc (body-params/body-params) save-user-email] :route-name :save-user-email]}))

(comment
  (def test-chan (async/chan))
  (def wrapped-ch (async/chan 10 (map pr-str)))
  (async/pipe wrapped-ch test-chan)

  (async/go-loop []
    (println [:test-chan-read (async/<! test-chan)])
    (recur))
  (async/close! test-chan)
  (async/put! wrapped-ch {:data 2})

  )

(def ws-paths
  {"/ws" {:on-open   (fn [session config]
                       (let [ch         (ws/start-ws-connection session config)
                             wrapped-ch (async/chan 10 (map pr-str))]
                         (clean-sockets)
                         (async/pipe wrapped-ch ch)
                         (reset! ws-client wrapped-ch)
                         (reset! in-chan (async/chan))
                         ;; Keep alive
                         (async/go-loop []
                           (async/<! (async/timeout 10000))
                           (async/put! ch "ping")
                           (recur))
                         ch))
          :on-text   (fn [ws-ch msg]
                       (let [data (edn/read-string msg)]
                         (tlog/log! :info [:in-msg data])
                         (when-not (#{:ping :pong "ping" "pong"} data)
                           (async/put! @in-chan data)
                           (async/put! ws-ch "msg received"))))
          :on-binary (fn [ws-ch payload] (log/info :msg "Binary Message!" :bytes payload))
          :on-error  (fn [ws-ch session t] (log/error :msg "WS Error happened" :exception t))
          :on-close  (fn [ws-ch session reason-text]
                       (log/info :msg "WS Closed:" :reason reason-text))}})


;; Consumed by {{namespace}}.server/create-server
;; See http/default-interceptors for additional options you can configure
(def service {:env                     :prod
              ;; You can bring your own non-default interceptors. Make
              ;; sure you include routing and set it up right for
              ;; dev-mode. If you do, many other keys for configuring
              ;; default interceptors will be ignored.
              ;; ::http/interceptors []
              ::http/routes            routes
              ::http/websockets        ws-paths

              ;; Uncomment next line to enable CORS support, add
              ;; string(s) specifying scheme, host and port for
              ;; allowed source(s):
              ;;
              ;; "http://localhost:8080"
              ;;
              ;;::http/allowed-origins ["scheme://host:port"]
              ::http/allowed-origins   {:creds true :allowed-origins (constantly true)}
              ::http/secure-headers    {:content-security-policy-settings {:object-src "'none'"}}

              ;; Tune the Secure Headers
              ;; and specifically the Content Security Policy appropriate to your service/application
              ;; For more information, see: https://content-security-policy.com/
              ;;   See also: https://github.com/pedestal/pedestal/issues/499
              ;;::http/secure-headers {:content-security-policy-settings {:object-src "'none'"
              ;;                                                          :script-src "'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:"
              ;;                                                          :frame-ancestors "'none'"}}

              ;; Root for resource interceptor that is available by default.
              ::http/resource-path     "public"

              ;; Either :jetty, :immutant or :tomcat (see comments in project.clj)
              ;;  This can also be your own chain provider/server-fn -- http://pedestal.io/reference/architecture-overview#_chain_provider
              ::http/type              :jetty
              ::http/host              "0.0.0.0"
              ::http/port              8080
              ;; Options to pass to the container (Jetty)
              ::http/container-options {:h2c? true
                                        :h2?  false
                                        ;:keystore "test/hp/keystore.jks"
                                        ;:key-password "password"
                                        ;:ssl-port 8443
                                        :ssl? false
                                        ;; Alternatively, You can specify your own Jetty HTTPConfiguration
                                        ;; via the `:io.pedestal.http.jetty/http-configuration` container option.
                                        ;:io.pedestal.http.jetty/http-configuration (org.eclipse.jetty.server.HttpConfiguration.)
                                        }
              ::http/enable-session    {}

              })
;; This is an adapted service map, that can be started and stopped
;; From the REPL you can call server/start and server/stop on this service
(defonce runnable-service (http/create-server service))

(defn run-dev
  "The entry-point for 'lein run-dev'"
  [& args]
  (println "\nCreating your [DEV] server...")
  (-> service                                               ;; start with production configuration
      (merge {:env                   :dev
              ;; do not block thread that starts web server
              ::http/join?           false
              ;; Routes can be a function that resolve routes,
              ;;  we can use this to set the routes to be reloadable
              ::http/routes          #(deref #'routes)
              ;; all origins are allowed in dev mode
              ::http/allowed-origins {:creds true :allowed-origins (constantly true)}
              ;; Content Security Policy (CSP) is mostly turned off in dev mode
              ::http/secure-headers  {:content-security-policy-settings {:object-src "'none'"}}
              })
      ;; Wire up interceptor chains
      http/default-interceptors
      http/dev-interceptors
      http/create-server
      http/start))

(defonce serv (atom nil))

(defn restart-server! []
  (when (some? @serv)
    (http/stop @serv))
  (reset! serv (run-dev)))

(defn start
  ([]
   (http/start runnable-service))
  ([opts] (start)))


(comment

  (restart-server!)
  (prof/serve-ui 9001)

  )