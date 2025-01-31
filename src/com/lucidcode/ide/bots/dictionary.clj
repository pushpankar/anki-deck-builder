(ns com.lucidcode.ide.bots.dictionary
  (:require [clojure.data.csv :as csv]
            [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [cheshire.core :as json]))

(defn parse-dictionary []
  (let [wordlist (csv/read-csv (slurp "/home/pushpankar/temp/anki-automation/english Dictionary.csv"))
        wordmap  (reduce (fn [coll [word _ meaning]]
                           (update coll (str/lower-case word) (fn [v]
                                                                (if (nil? v)
                                                                  meaning
                                                                  (str/join "\n " [v meaning]))))) {} wordlist)]
    (reduce (fn [coll [word meaning]]
              (if-let [match (first (re-seq #"^of \w+$" meaning))]
                (assoc coll word (get coll (str/lower-case (second (str/split match #" ")))))
                coll)) wordmap wordmap)))

(def dictionary (edn/read-string
                  (slurp (io/resource "anki/dictionary.edn")))
  #_(parse-dictionary))


(comment
  (spit "resources/anki/dictionary.edn" (pr-str (parse-dictionary)))

  (spit "resources/anki/dictionary.json"
        (json/generate-string (parse-dictionary)))

  (re-seq #"^of \w+$" "of Hello")
  (str/join "\n" [nil "a"])


  (mapv count
        (csv/read-csv (slurp "/home/pushpankar/temp/anki-automation/english Dictionary.csv"))))

