(ns com.lucidcode.ide.html
  (:require [com.lucidcode.ide.xml-selector :as selector]
            [etaoin.api :as e]
            [etaoin.api :as et]
            [etaoin.keys :as keys])
  (:import (java.io Closeable)))

(defrecord HTMLPage [driver]
  Closeable
  (close [this]
    (et/quit driver)))

(defn create-HTMLPage []
  (->HTMLPage (et/firefox)))


(defn- element->map
  "Converts an Etaoin element to a standardized map representation"
  [driver element]
  (when element
    {:text       (et/get-element-text driver element)
     :id         (et/get-element-attr driver element "id")
     :class      (et/get-element-attr driver element "class")
     :attributes (et/get-element-attrs driver element)
     :element    element}))

(defn- elements->maps
  "Converts a sequence of Etaoin elements to standardized maps"
  [driver elements]
  (map #(element->map driver %) elements))

(defn- query-elements
  "Executes a query and returns standardized element maps"
  [page query-fn]
  (let [elements (query-fn (:driver page))]
    (if (sequential? elements)
      (elements->maps (:driver page) elements)
      [(element->map (:driver page) elements)])))


(extend-type HTMLPage
  selector/SELECTOR


  (select-by-id [page id]
    (query-elements page #(et/query % {:id id})))

  (select-by-text [page text-value]
    (query-elements page
                    #(et/query-all % {:xpath (str "//*[contains(text(), '" text-value "')]")})))

  (select-by-class [page class]
    (query-elements page
                    #(et/query-all % {:css (str "." class)})))

  (select-by-tag [page tag]
    (query-elements page
                    #(et/query-all % {:tag tag})))

  (select-by-property [page property value]
    (query-elements page
                    #(et/query-all % {:xpath (str "//*[@" property "='" value "']")}))))

;(def page (create-HTMLPage))

(defn go-to-url [page url]
  (et/go (:driver page) url)
  )


(defn scroll-el
  "Have `driver` scroll to the element

  Invokes element's `.scrollIntoView()` method. Accepts extra `param`
  argument that might be either boolean or object for more control.
  See [Mozilla's docs for values](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)."
  ([driver el]
   (et/js-execute driver "arguments[0].scrollIntoView();" (et/el->ref el)))
  ([driver el param]
   (et/js-execute driver "arguments[0].scrollIntoView(arguments[1]);" (et/el->ref el) param)))



(defmacro wait-retry
  "Evaluate the body. If it raises an error, wait for 5 seconds, then retry it.
  If it raises an error again, return nil."
  [& body]
  `(try
     ~@body
     (catch Exception _#
       (Thread/sleep 5000)                                  ;; Wait for 5 seconds
       (try
         ~@body
         (catch Exception _#
           nil)))))

(defn query-all+ [driver selector]
  (wait-retry (et/query-all driver selector)))

(defn query+ [driver selector]
  (wait-retry (et/query driver selector)))

(defn scroll-query+ [driver selector params]
  (wait-retry
    (et/scroll-query driver selector params)))

(defn bring-to-center [driver selector]
  (scroll-query+ driver selector {:block    "center"
                                  :inline   "center"
                                  :behavior "smooth"})
  (et/wait (rand-int 4)))


(defn find-element-by-text [page selector text]
  (let [elements (if (sequential? selector)
                   (mapcat #(query-all+ (:driver page) %) selector)
                   (query-all+ (:driver page) selector))]
    (loop [els elements]
      (cond
        (empty? els) nil
        (= (et/get-element-text-el (:driver page) (first els)) text) (first els)
        :else (recur (rest els))))))



(comment

  (doto page
    (go-to-url "https://www.thehindu.com/news/national/assam/assam-mining-tragedy-body-of-second-miner-retrieved-from-flooded-coal-mine/article69087661.ece")
    (et/get-element-text {:tag :h1}))

  (selector/select-by-class page "title")

  (et/get-element-attrs (:driver page) {:css "//[@class=title]"})

  (defn print-title-texts [driver]
    (let [elements (et/query-all driver "//*[self::h1 or self::h2 or self::h3][contains(concat(' ', normalize-space(@class), ' '), ' title ')]")]
      (doseq [el elements]
        (println (et/get-element-text-el driver el)))))

  (print-title-texts (:driver page))
  (et/query-all (:driver page) {:fn/has-class "title"
                                :tag          :h4})



  (count
    (et/query-all (:driver page)
                  "//*[self::h1 or self::h2 or self::h3][contains(concat(' ', normalize-space(@class), ' '), ' title ')]")))