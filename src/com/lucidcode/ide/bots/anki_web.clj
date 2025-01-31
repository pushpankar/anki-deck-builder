(ns com.lucidcode.ide.bots.anki-web
  "UI automation for anki web"
  (:require [clojure.core.async :as async]
            [clojure.core.match :refer [match]]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [clojure.set :as set]
            [clojure.string :as str]
            [com.lucidcode.ide.html :as html]
            [etaoin.api :as et]
            [etaoin.keys :as k]
            [com.lucidcode.ide.bots.anki :as anki]
            [com.lucidcode.ide.bots.dictionary :as dictionary]
            [clj-http.client :as client]
            [cheshire.core :as json]
            [java-time.api :as jt]
            [com.lucidcode.ide.core :refer [with-retry]]
            [taoensso.telemere :as log]))


(comment
  ;; This is for development only.
  ;; Since when the app actually opens up the instance it should close it as well.
  (defonce ^:private curr-page (html/create-HTMLPage))
  (def driver (:driver curr-page))
  )

(defn identify-page [pages page-obj]
  (let [scores    (map #((% page-obj) :match-score) pages)
        max-score (apply max scores)]
    (when (> max-score 0)
      (first (filter #(= ((% page-obj) :match-score) max-score) pages)))))

(defn define-word-local-llm [[word usage]]
  (let [response (with-retry 3
                             (client/post "http://40.76.137.53:80/api/meaning"
                                          {:headers {"Content-Type" "application/json"}
                                           :body    (json/generate-string {:word word :sentence usage})}))]
    (if (= 200 (:status response))                          ; Check if response status is OK (200)
      (:best_meaning
        (json/parse-string (:body response) true))          ; Parse the response body if successful
      (throw (Exception. (str "Error: " (:status response) " - " (:body response)))))))

(defn send-alert-text [driver text]
  (et/execute {:driver driver
               :method :post
               :data   {:text text}
               :path   [:session (:session driver) :alert :text]}))

(defn has-alert? [driver]
  (try
    (et/get-alert-text driver)
    true
    (catch Exception _
      false)))

(defn has-element? [driver selector]
  (try
    (et/query driver selector)
    true
    (catch Exception _
      false)))

(def last-known-url (atom nil))

(defn get-current-url [page]
  "Gets the current URL using et/get-url if no alert is present.
   Returns the last known URL if there's an alert."
  (let [driver (:driver page)]
    (if (has-alert? driver)
      ;; Return the last known URL if there's an alert
      @last-known-url
      ;; Fetch the URL and update the last known value
      (let [url (et/get-url driver)]
        (reset! last-known-url url)
        url))))


#_(defpage homepage
           '[[(_ :text "AnkiWeb") (nav-deck :text "Decks") (nav-add :text "Add") (logout :text "Log Out")]
             [(deck-name {:type :button}) deck-status (action-btn :sub-text "Actions") :repeat :1+]
             [(create-deck {:type :button :text "Create Deck"})]])

(defn homepage [page]
  (let [driver            (:driver page)
        decklist-selector {:xpath "/html/body/div/main/div[position() <= last() - 2]//button"}]
    (fn [& messages]
      (match (vec messages)
        [:match-score] (if (and (not (has-alert? driver))
                                (= (get-current-url page) "https://ankiweb.net/decks"))
                         1 0)
        [:state] :ready
        [:list-decks] (->> (et/query-all driver decklist-selector)
                           (mapv #(et/get-element-text-el (:driver page) %))
                           (mapv str/trim)
                           (remove #(or
                                      (str/blank? %)
                                      (str/includes? % "Actions"))))
        [:open-deck deck-name] (->> (et/query-all driver {:xpath "/html/body/div/main/div[position() <= last() - 2]//button"})
                                    (filter #(str/includes? (et/get-element-text-el driver %) deck-name))
                                    first
                                    (et/click-el driver))
        [:go-to :create-deck] (et/click driver {:xpath ".//button[text()='Create Deck']"})
        [:go-to :add] (et/click driver {:xpath ".//a[text()='Add']"})))))


(defn create-deck-window [page]
  (let [driver   (:driver page)
        page-url #(get-current-url page)]
    (fn [& message]
      (match (vec message)
        [:match-score] (if (and (= (page-url) "https://ankiweb.net/decks")
                                (has-alert? driver))
                         1 0)
        [:state] :ready
        [:create-deck deck-name] (do (send-alert-text driver deck-name)
                                     (et/accept-alert driver))))))


(defn add-page [page]
  (let [driver          (:driver page)
        deck-selector   {:xpath ".//span[text()='Deck']/following-sibling::div/descendant::input"}
        deck-item       {:xpath ".//span[text()='Deck']/following-sibling::div//div[contains(@class, 'list-item')]"}
        deck-type-items {:xpath ".//span[text()='Type']/following-sibling::div//div[contains(@class, 'list-item')]"}
        front-input     {:xpath ".//span[text()='Front']/following-sibling::div/descendant::div[@contenteditable='true']"}
        back-input      {:xpath ".//span[text()='Back']/following-sibling::div/descendant::div[@contenteditable='true']"}
        tags-input      {:xpath ".//span[text()='Tags']/following-sibling::div/descendant::div[@contenteditable='true']"}
        add-button      {:xpath ".//button[text()='Add']"}]
    (fn [& messages]
      (match (vec messages)
        [:match-score] (if (= (get-current-url page) "https://ankiuser.net/add") 1 0)
        [:state] (cond
                   (has-element? driver deck-type-items) :select-deck-type
                   (has-element? driver deck-item) :select-deck
                   :else [:ready-to-fill (et/get-element-text driver {:xpath        ".//span[text()='Deck']/following-sibling::div"
                                                                      :fn/has-class "selected-item"})])
        [:switch-to-deck deck-name] (do (when-not (has-element? driver deck-item)
                                          (et/touch-tap driver deck-selector)
                                          (et/wait 1))
                                        (some->> (et/query-all driver deck-item)
                                                 (filter #(= (et/get-element-text-el driver %) deck-name))
                                                 first
                                                 (et/click-el driver)))
        [:add word description] (do (et/clear driver front-input)
                                    (et/clear driver back-input)
                                    (et/fill-human driver front-input word {:mistake-prob 0
                                                                            :pause-max    0.05})
                                    (et/fill-human driver back-input description {:mistake-prob 0
                                                                                  :pause-max    0.05})
                                    (et/click driver add-button))))))


(defn about-page [page]
  (let [driver (:driver page)]
    (fn [& msg]
      (match (vec msg)
        [:match-score] (if (str/includes? (get-current-url page) "about")
                         1
                         0)
        [:state] (if (has-element? driver {:xpath ".//a[text()='Log In']"})
                   :logged-out
                   :ready)
        [:go-to-login] (et/click driver ".//a[text()='Log In']")))))

(defn login-page [page]
  (let [driver             (:driver page)
        email-selector     {:xpath ".//input[@placeholder='Email']"}
        password-selector  {:xpath ".//input[@placeholder='Password']"}
        login-btn-selector {:xpath ".//button[text()='Log In']"}]
    (fn [& msg]
      (match (vec msg)
        [:match-score] (if (= (get-current-url page) "https://ankiweb.net/account/login")
                         1
                         0)
        [:state] :ready
        [:login email password] (do
                                  (et/clear driver email-selector)
                                  (et/clear driver password-selector)
                                  (et/fill driver email-selector email)
                                  (et/fill driver password-selector password)
                                  (et/click driver login-btn-selector))))))

;; This was very cumbersome. This is also very brittle. Slight change in xpath and things will break

(defn create-deck-flow [page deck-name words-map]
  ;; Assuming user has logged in
  (let [driver          (:driver page)
        home            (homepage page)
        create-deck-obj (create-deck-window page)
        add-obj         (add-page page)]
    (et/go driver "https://ankiweb.net/decks")
    (et/wait driver 2)
    (when-not ((set (home :list-decks)) deck-name)
      (home :go-to :create-deck)
      (et/wait 2)
      (create-deck-obj :create-deck deck-name)
      (et/wait 2))
    (et/wait 2)
    (home :go-to :add)
    (et/wait 2)
    (doseq [[word usage] words-map]
      (add-obj :switch-to-deck deck-name)
      (et/wait 2)
      (add-obj :add word (str (anki/define-word-local-llm [word usage]) "\n" usage))
      (et/wait 2))))


;; The implementation of word map is leaking out.
;; I need to be aware how the word-map is implemented
;; @TODO maybe I should create defrecord named Deck
;; Deck has name word list and bunch of functions
;; a. for getting a word
;; b. for getting the definition of the word
;; c. it can be updated with the definition
;; e. Has associated usage and respective page number
;; f. Then it can be sorted based on the property like usage count, first usage page no. etc.
;;    No need to implement a specific function for that.

;(def continuations (atom {}))

(defn create-deck-flow-fsm [in-chan out-chan deck-name words-map]
  (async/go
    (with-open [browser (html/create-HTMLPage)]
      (let [driver (:driver browser)
            state (atom {:word-list words-map})
            pages {:homepage           homepage
                   :create-deck-window create-deck-window
                   :add-page           add-page
                   :about-page         about-page
                   :login-page         login-page}
            curr-page browser]
        ;; @TODO select better names. page, curr-page, page-handlers are ambiguous.
        ;; Design of this needs to be improved as well.
        ;; I should be able to ask the user to login. if they haven't already done so.
        (when (not (str/includes? (get-current-url browser) "ankiweb.net"))
          (et/go driver "https://ankiweb.net/")
          (et/wait 2))

        (while (seq (get @state :word-list))
          (let [page         (identify-page (vals pages) curr-page)
                page-id      (get (set/map-invert pages) page)
                page-handler (page curr-page)
                page-state   (page-handler :state)]
            (log/log! :info [page-id page-state])
            (match [page-id page-state]
              [:about-page :logged-out]
              (page-handler :go-to-login)

              [:login-page _]
              (do
                (async/>! out-chan :login-required)
                (async/<! in-chan))

              #_(flow/call-then-suspend continuations [:create-deck-flow] (constantly :please-login))
              #_(page-handler :login "pushpankark@gmail.com" "Pn%7LgJmDkDc")
              ;; Here I want to suspend and wait for re-invocation to continue

              [:homepage _]
              (if-not ((set (page-handler :list-decks)) deck-name)
                (page-handler :go-to :create-deck)
                (page-handler :go-to :add))

              [:create-deck-window _]
              (page-handler :create-deck deck-name)

              [:add-page :select-deck]
              (page-handler :switch-to-deck deck-name)

              [:add-page [:ready-to-fill deck-name]]
              (let [[word usage] (first (get @state :word-list))]
                (page-handler :add word (str (define-word-local-llm [word usage]) "\n" usage))
                (swap! state update :word-list rest))

              [:add-page [:ready-to-fill _]]
              (page-handler :switch-to-deck deck-name)
              ;; Here instead of going to homepage. I should just suspend

              :else
              ;(flow/call-then-suspend continuations [:create-deck-flow] notify "Please login")
              (et/go driver "https://ankiweb.net/decks")))
          (Thread/sleep 2000))))
    (async/>! out-chan :done)))




(comment

  (create-deck-flow-fsm "test-deck" [["clever" "He is a clever guy"] ["insipid" "Her speech made us insipid."]])
  (((identify-page (vals {:homepage           homepage
                               :create-deck-window create-deck-window
                               :add-page           add-page
                               :about-page         about-page
                               :login-page         login-page}) curr-page) curr-page) :switch-to-deck "Dune")

  (for [p [homepage create-deck-window add-page about-page login-page]]
    ((p curr-page) :match-score))

  #_(get-current-url)


  ((add-page curr-page) :switch-to-deck "hello")
  ((add-page curr-page) :add "test word" "test description nice")


  ((login-page curr-page) :login "pushpankark@gmail.com" "Pn%7LgJmDkDc")
  ((about-page curr-page) :go-to-login)

  (has-element? driver {:xpath ".//input[@placeholder='Email']"})


  (et/fill driver {:xpath ".//input[@placeholder='Email']"} "pushpankark@gmail.com")
  (et/clear driver {:xpath ".//input[@placeholder='Email']"})
  ;; Why not anki deck template i.e. apkg
  ;; Because UI automation is cool

  (with-open [r (io/reader "/home/pushpankar/temp/anki-automation/dune1b.words.csv")]
    (->> (csv/read-csv r :separator \tab)
         (mapv (fn [arg] [(first arg) (last arg)]))
         (filter (fn [[word _]] (contains? dictionary/dictionary word)))
         (take 100)
         (create-deck-flow-fsm "Dune")))


  (et/dismiss-alert (:driver curr-page))
  (et/has-alert? (:driver curr-page))

  (et/accept-alert (:driver curr-page))

  (et/go (:driver curr-page)
         "https://ankiweb.net/")
  (et/fill-active (:driver curr-page) "http")

  (et/fill-active (:driver curr-page) "hi")
  (k/insert)
  (et/switch-window-next (:driver curr-page))












  (anki/define-word-local-llm ["burred" "Sand rasped as he opened the sphincter and a burred fizzle of grains ran into the tent before he could immobilize it with a static compaction tool"])

  (et/get-element-rect driver {:xpath ".//span[text()='Back']/following-sibling::div/descendant::div[@contenteditable='true']"})

  (et/get-element-rect driver
                       {:xpath ".//span[text()='Deck']/following-sibling::div//div[contains(@class, 'list-item')]"})

  )