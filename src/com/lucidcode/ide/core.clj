(ns com.lucidcode.ide.core
  (:import (java.net NetworkInterface)))

(defmacro do-while
  [& exprs]
  {:pre [(> (count exprs) 2)]}
  (let [body (butlast exprs)
        test (last exprs)]
    `(loop []
       ~@body
       (when ~test
         (recur)))))


(defn get-mac-address []
  (let [interfaces (NetworkInterface/getNetworkInterfaces)]
    (loop [i interfaces]
      (if (.hasMoreElements i)
        (let [iface (.nextElement i)
              mac   (.getHardwareAddress iface)]
          (when mac
            (apply str (map #(format "%02X" %) mac))))
        nil))))

(defn make-exponential-incrementer [base-multiplier]
  (let [counter (atom 0)]
    (fn []
      (swap! counter inc)
      (* base-multiplier (Math/pow 2 (dec @counter))))))


(defmacro with-retry' [count exponentiator & body]
  (if (<= count 1)
    `(do ~@body)
    `(try
       ~@body
       (catch Exception e#
         (println (.getMessage e#))
         (Thread/sleep (int (~exponentiator)))
         (with-retry' ~(dec count) ~exponentiator
                      ~@body)))))

(defmacro with-retry [count & body]
  `(let [exp# (make-exponential-incrementer 30000)]
     (with-retry' ~count exp# ~@body)))

(comment

  ;; Usage Exam
  (< (rand-int 10) 1)
  (rand-int 10)
  (macroexpand-1
    (macroexpand-1
      '(with-retry 10
                   (if (> (rand-int 10) 1)
                     (/ 1 0)
                     (println :worked)))))
  (with-retry 10
              (if (> (rand-int 10) 1)
                (/ 1 0)
                (println :worked)))

  (macroexpand-1 '(with-retry 3
                              (println "Attempting...")
                              (throw (Exception. "Failed!")))))