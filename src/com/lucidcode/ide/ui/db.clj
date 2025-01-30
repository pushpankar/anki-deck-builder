(ns com.lucidcode.ide.ui.db
  (:require [clojure.edn :as edn])
  (:import [java.util.prefs Preferences]))

(defn get-prefs []
  (.node (Preferences/userRoot) "/lucidcode")) ;; Namespace under which data is stored

(defn save-data [key value]
  (doto (get-prefs)
    (.put (pr-str key) (pr-str value))
    (.flush)))

(defn get-data [key]
  (let [prefs (get-prefs)
        value (.get prefs (pr-str key) nil)]
    (when value
      (edn/read-string value))))

(defn get-parsed-book-count []
  (if-let [c (get-data :books-parsed)]
    c
    0))

(defn inc-parsed-book-count []
  (if-let [c (get-data :books-parsed)]
    (save-data :books-parsed (inc c))
    (save-data :books-parsed 1)))

(defn delete-data [key]
  (let [prefs (get-prefs)]
    (.remove prefs (pr-str key))
    (.flush prefs)))

(comment
  (save-data :test {:this :that})
  (get-data :user-email)
  (delete-data :user-email))