(ns com.lucidcode.ide.app
  (:require [com.lucidcode.ide.ui.server :as server])
  (:gen-class))

(defn -main
  [& args]
  (System/setProperty "org.slf4j.simpleLogger.defaultLogLevel" "error")
  (println "
  ")
  (println "    Please open http://localhost:8080 in your browser. Then follow the instruction on the website")
  (println "    Also please ensure that firefox is installed.


  ")
  (server/start))