(ns com.lucidcode.ide.ui.anki
  (:require [re-frame.core :as rf]
   [reagent.core :as r]
   [ajax.core :as ajax]
   [day8.re-frame.http-fx]
   [reagent.dom :as rdom]
   [clojure.string :as str]
   [clojure.core.async :as async]
   [clojure.tools.reader.edn :as edn]))



(def component-seq [:file-upload :select-word :adding-words])

(defn next-in-seq [coll current]
  {:pre [(sequential? coll)]}
  (let [idx (.indexOf coll current)]
    (if (or (neg? idx) (>= idx (dec (count coll))))
      nil ;; Return nil if current is not found or is the last element
      (nth coll (inc idx))))) 

(def default-db
  {:current-component :file-upload
   :file-upload {:error nil
                 :file nil}})

(defn status-msg? [msg]
  (contains? #{:login-required :done} msg))

;; Initialize WebSocket connection

(defn connect-websocket []
  (let [ws (js/WebSocket. "ws://localhost:8080/ws")]
    (set! (.-onopen ws) (fn [] 
                          (js/console.log "WebSocket connected")
                          (.send ws "pong")))
    (set! (.-onmessage ws)
      (fn [event]
        (let [data (.-data event)]
          ;; Dispatch received data to an event
          (rf/dispatch [:ws/message-received data]))))
    (set! (.-onclose ws) #(js/console.log "WebSocket closed"))
    (set! (.-onerror ws) #(js/console.error "WebSocket error"))
    ws))


(rf/reg-event-db
  :ws/message-received
  (fn [db [_ msg]]
    (let [msg (edn/read-string msg)]
      (if (status-msg? msg)
        (assoc-in db [:status] msg)
        db))))

;; Send message
(rf/reg-fx :ws/send-message
  (fn [[conn message]]
    (when conn
      (.send conn (pr-str message)))))

;; events
(rf/reg-event-db 
  ::initialize-db
  (fn [_ _]
    (let [ws (connect-websocket)]
      (assoc default-db :ws ws))))

(rf/reg-event-db
  ::http-error 
  (fn [db resp]
    (println resp)
    db))

(rf/reg-event-db
  :upload/set-file
  (fn [db [_ file]]
    (if (.endsWith (.-name file) ".epub")
      (-> db 
        (assoc-in [:file-upload :file] file)
        (update :file-upload dissoc :error))
      (-> db 
        (assoc-in [:file-upload :error] "Only .epub files are allowed.")
        (update :file-upload dissoc :file)))))

(rf/reg-event-fx
  :upload/parse-book
  (fn [{:keys [db]} _]
    (let [body (doto (js/FormData.)
                 (.append "file" (get-in db [:file-upload :file])))]
      {:http-xhrio {:method :post 
                    :uri "/parse-book"
                    :body body
                    :format (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true}) 
                    :on-success [::on-parse-book]
                    :on-failure [::http-error]}})))

(rf/reg-event-db
  :upload/set-deck-name
  (fn [db [_ deck-name]]
    (assoc-in db [:file-upload :deck-name] deck-name)))

(rf/reg-event-db
  ::on-parse-book 
  (fn [db [_ {:keys [word-list ask-for-email?]}]]
    (-> db 
      (assoc :word-list word-list)
      (assoc :ask-for-email? ask-for-email?))))


(rf/reg-event-db 
  ::next-component
  (fn [db _]
    (update db :current-component #(next-in-seq component-seq %))))

;; subs
(rf/reg-sub
  :file-upload
  (fn [db _]
    (:file-upload db)))

(defn step-annotator [i n] 
  [:div.w-full.py-4.px-6
   [:div.max-w-4xl.mx-auto.text-center
    [:p.text-sm.font-medium.text-gray-600 (str "Step: " i "/" n)]]])

(defn next-button [enabled? on-click]
  [:div.flex.justify-end.mt-4
   [:button.py-2.px-8.rounded-md.text-white.font-medium
    {:class (if enabled?
              "bg-blue-600 hover:bg-blue-700"
              "bg-gray-300 cursor-not-allowed")
     :disabled (not enabled?)
     :on-click #(when enabled? 
                  (rf/dispatch [::next-component])
                  (on-click))}
    "Next"]])

(rf/reg-sub
  ::deck-name 
  (fn [db _]
    (get-in db [:file-upload :deck-name])))

(defn file-upload-component []
  (let [file-upload (rf/subscribe [:file-upload])
        deck-name (rf/subscribe [::deck-name])]
    (fn []
      [:div.pt-16.pb-24.mx-auto
       [:div.rounded-lg.p-8.w-full.min-w-md.max-w-lg.border.bg-white.shadow-sm
        ;; Title Section
        [:div.text-center.mb-8
         [:h2.text-xl.font-semibold.text-gray-700.mb-2 "Select EPUB File"]
         #_[:p.text-gray-600 "Choose an EPUB file from your computer"]]
         
        ;; Upload Section
        [:div.space-y-6
         [:div.flex.space-x-8
          [:label.block.text-sm.font-medium.text-gray-700.inline-flex.items-center "Deck Name"]
          [:input.block.text-sm.text-gray-500.mt-1.px-4.py-2.border.rounded-md.shadow-sm
           {:type "text"
            :placeholder "Enter deck name"
            :on-change #(rf/dispatch [:upload/set-deck-name (-> % .-target .-value)])}]]

         ;; File Input
         [:div.relative
          [:input.block.w-full.text-sm.text-gray-500.file:mr-4.file:py-2.file:px-4.file:rounded-md.file:border-1
           {:type "file"
            :accept ".epub"
            :on-change #(let [file (-> % .-target .-files (aget 0))]
                          (rf/dispatch [:upload/set-file file]))}]]
          
         ;; Error Message
         (when (:error @file-upload)
           [:p.text-sm.text-red-500.mt-2.max-w-lg (:error @file-upload)])]]
       [next-button (and (:file @file-upload)
                      (not (str/blank? @deck-name)))
        #(rf/dispatch [:upload/parse-book])]])))

;; word list
(rf/reg-sub
  :word-list
  (fn [db]
    (:word-list db)))

(rf/reg-event-db
  :toggle-word
  (fn [db [_ word]]
    (update-in db [:word-list]
      (fn [words]
        (map (fn [[w f s sel?]]
               (if (= w word)
                 [w f s (not sel?)]
                 [w f s sel?]))
          words)))))

(rf/reg-event-db
  :select-all-words
  (fn [db [_ select-all?]]
    (update db :word-list (fn [word-list]
                            (mapv (fn [[word freq usage _]] 
                                    [word freq usage select-all?])
                              word-list)))))

(rf/reg-sub
  :all-selected?
  (fn [db _]
    (and (seq (:word-list db))
      (every? #(get % 3) (:word-list db)))))

(rf/reg-event-fx
  ::add-words-to-anki
  (fn [{:keys [db]} _]
    (let [words (filter #(get % 3) (:word-list db))]
      {:http-xhrio {:method :post 
                    :uri "/add-words-to-anki"
                    :params {:deck-name (-> db 
                                          (get-in [:file-upload :deck-name])) 
                             :words words}
                    :format (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true}) 
                    :on-success [::on-start-adding-to-anki]
                    :on-failure [::http-error]}})))

(rf/reg-event-db
  ::on-start-adding-to-anki
  (fn [db _]
    (assoc db :status :adding)))


(defn word-item [[word frequency sentence  selected?]]
  [:div.flex.flex-col.py-3.px-4.hover:bg-gray-50.transition-colors
   {:on-click #(rf/dispatch [:toggle-word word])}
   
   ;; Word and Frequency Row
   [:div.flex.items-center.justify-between.cursor-pointer
    [:div.flex.items-center.space-x-3
     ;; Checkbox
     [:div.w-5.h-5.border.rounded
      {:class (if selected? 
                "bg-blue-600 border-blue-600"
                "border-gray-300")}
      (when selected?
        [:svg.w-4.h-4.text-white.mx-auto.mt-0.5
         {:viewBox "0 0 20 20" :fill "currentColor"}
         [:path {:fill-rule "evenodd"
                 :d "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                 :clip-rule "evenodd"}]])]
     ;; Word
     [:span.text-gray-700.font-medium (str/capitalize word)]]
    ;; Frequency
    [:span.text-gray-500.text-sm (str "(" frequency ")")]]
   
   ;; Usage Example
   [:div.mt-2.pl-8
    [:p.text-sm.text-gray-600.italic sentence]]])

(defn word-frequency-component []
  (let [words @(rf/subscribe [:word-list])
        all-selected? (rf/subscribe [:all-selected?])]
    ;; Main Content
    [:div.w-full.max-w-2xl.px-4.py-6.mx-auto
     [:div.w-full.bg-white.rounded-lg.border.border-gray-200
      ;; Header
      [:div.px-4.py-5.border-b.border-gray-200.flex.justify-between.space-x-4
       [:div 
        [:h2.text-lg.font-medium.text-gray-700 "Select words"]
        [:p.mt-1.text-sm.text-gray-500 
         "Each word has an example and its first occurence."]]
       [:div.mt-4.flex.justify-end
        [:button.bg-blue-500.text-white.rounded-md.px-3.py-1.shadow.hover:bg-blue-600
         {:on-click #(rf/dispatch [:select-all-words (not @all-selected?)])}
         (if @all-selected? "Deselect All" "Select All")]]]
       
      ;; Word List
      [:div.divide-y.divide-gray-200
       (for [word-data words]
         ^{:key (first word-data)}
         [word-item word-data])]]
     [next-button true #(rf/dispatch [::add-words-to-anki])]]))

(rf/reg-event-fx
  ::continue-flow 
  (fn [{:keys [db]} _]
    {:db (assoc db :status :adding)
     :ws/send-message [(get-in db [:ws]) {:topic :flow :msg :continue}]}))

(rf/reg-sub
  ::status 
  (fn [db _]
    (get-in db [:status])))

(defn- adding []
  [:div.flex.items-center
    [:svg.animate-spin.h-6.w-6.text-blue-500
     {:xmlns "http://www.w3.org/2000/svg" 
      :fill "none" 
      :viewBox "0 0 24 24" 
      :stroke "currentColor"}
     [:circle {:cx "12" :cy "12" :r "10" :stroke-width "4" :stroke "currentColor" :fill "none"}]
     [:path {:fill "currentColor" :d "M4 12a8 8 0 0116 0H4z"}]]
    [:span.ml-2.text-blue-500 "Adding..."]])

(defn status-component []
  (let [status @(rf/subscribe [::status])]
    [:div.w-full.max-w-2xl.px-4.py-6.mx-auto
     [:div.w-full.bg-white.rounded-lg.border.border-gray-200
      ;; Status Indicator
      [:div.flex.items-center.justify-center.my-4.p-8
       (case status
         :adding [adding]
         :login-required [:div.flex.flex-col.items-center.gap-4
                          [:div.text-gray-600 "Please login in anki. Then click continue"]
                          [:button.px-4.py-2.bg-blue-500.text-white.rounded-md.hover:bg-blue-600.transition-colors.mt-8
                           {:on-click #(rf/dispatch [::continue-flow])}
                           "Continue"]]
         :done [:div.flex.items-center
                [:svg.h-6.w-6.text-green-500
                 {:xmlns "http://www.w3.org/2000/svg" 
                  :viewBox "0 0 20 20" 
                  :fill "currentColor"}
                 [:path {:fill-rule "evenodd" :d "M16.707 5.293a1 1 0 00-1.414 0L7 13.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l9-9a1 1 0 000-1.414z" :clip-rule "evenodd"}]]
                [:span.ml-2.text-green-500 "Added"]]
         [adding]
         )]]]))

(rf/reg-event-db
  ::skip-email
  (fn [db _]
    (dissoc db :ask-for-email?)))

(rf/reg-event-fx
  ::save-user-email
  (fn [{:keys [db]} [_ email]]
    {:http-xhrio {:method :post 
                  :uri "/save-user-email"
                  :params {:email email}
                  :format (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true}) 
                  :on-success [::on-save-user-email]
                  :on-failure [::http-error]}
     :db (dissoc db :ask-for-email?)}))

(rf/reg-event-db
  ::on-save-user-email
  (fn [db _]
    db))

(defn ask-for-email []
  (let [user-email (r/atom "")]
    (fn []
      [:div.pt-16.pb-24.mx-auto
       [:div.rounded-lg.p-8.w-full.min-w-md.max-w-lg.border.bg-white.shadow-sm
        ;; Title Section
        [:div.mb-8
         [:h3.text-lg.font-semibold.text-gray-700.mb-4.text-center "Please enter your email"]
         [:p.text-sm.text-left.text-gray-700 "We will update you when a new version of the app is availble with new features, bug fixes etc."]]
    
        ;; Input Section
        [:div.space-y-6
         [:div.flex.space-x-4.items-center
          [:label.block.text-sm.font-medium.text-gray-700 "Email"]
          [:input.block.text-sm.text-gray-500.mt-1.px-4.py-2.border.rounded-md.shadow-sm.w-full
           {:type "email"
            :value @user-email
            :placeholder "Enter your email"
            :on-change #(reset! user-email (-> % .-target .-value))}]]]
    
        ;; Button Section
        [:div.flex.justify-between.space-x-4.mt-8
         [:button.px-4.py-2.text-gray-500.text-sm.font-medium.underline.cursor-pointer
          {:on-click #(rf/dispatch [::skip-email])}
          "Skip"]
         [:button.px-4.py-2.bg-blue-600.text-white.rounded-md.shadow-sm.cursor-pointer.hover:bg-blue-700
          {:on-click #(rf/dispatch [::save-user-email @user-email])}
      
          "Next"]]]])))

(rf/reg-sub
  ::curr-component-id
  (fn [db _]
    (get-in db [:current-component])))

(rf/reg-sub
  ::ask-for-email?
  (fn [db _]
    (get-in db [:ask-for-email?])))

(defn app []
  (let [curr-step (rf/subscribe [::curr-component-id])
        ask-for-email? (rf/subscribe [::ask-for-email?])]
    (fn []
      (println [@curr-step (.indexOf component-seq @curr-step)])
      [:div.min-h-screen.flex.flex-col
       [step-annotator (inc (.indexOf component-seq @curr-step)) (count component-seq)]
       (cond 
         (= @curr-step :file-upload) [file-upload-component]
         (deref ask-for-email?) [ask-for-email]
         (= @curr-step :select-word) [word-frequency-component] 
         (= @curr-step :adding-words) [status-component])])))

(defn ^:dev/after-load start []
  #_(re-frame/clear-subscription-cache!)
  (rdom/render [app] (.getElementById js/document "app")))


(defn init! []
  (rf/dispatch-sync [::initialize-db])
  (start))

