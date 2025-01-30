(ns com.lucidcode.ide.bots.anki-word-analysis
  (:require [clojure.data.csv :as csv]
            [clojure.string :as str]
            [com.lucidcode.ide.nlp :as nlp]
            [clojure.core.reducers :as r]
            [clj-async-profiler.core :as prof]))


(def articles
  (csv/read-csv (slurp "/home/pushpankar/temp/anki-automation/articles_2.csv")))


(with-open [f (clojure.java.io/writer "/home/pushpankar/temp/anki-automation/word_freqs.csv")]
  (doseq [[word freq] (as-> articles $
                            (mapv last $)
                            (str/join " " $)
                            (str/lower-case $)
                            (str/split $ #" ")
                            (frequencies $)
                            (sort-by val > $))]
    (.write f (str word "\t" freq "\n"))))


;; Download file
;; ❯ rg "^[A-Za-z0-9 .,+?;:'\"\(\)\[\]{}@#$%&*^=_]+$" crawl-articles.txt | rg --pcre2 '^(?=(.*\b(the|and|is|in|to|of|a|it)\b){3})' | less
;; Write a bash/zsh script which iterates through lines of a file- wet.paths
;; prepends each line with https://data.commoncrawl.org/
;; wgets that line
;; gunzip downloaded file
;; run this regex on the file rg "^[A-Za-z0-9 .,+?;:'\"\(\)\[\]{}@#$%&*^=_]+$"  | rg --pcre2 '^(?=(.*\b(the|and|is|in|to|of|a|it)\b){3})'
;; appends the output to crawl-articles.txt


(defn count-syllables [word]
  (let [word         (clojure.string/lower-case word)
        ; Remove non-letter characters
        cleaned      (clojure.string/replace word #"[^a-z]" "")
        ; Split into array of chars for processing
        chars        (seq cleaned)
        ; Define vowels including y
        vowels       #{\a \e \i \o \u \y}
        ; Count sequences of vowels (diphthongs count as one syllable)
        vowel-groups (re-seq #"[aeiouy]+" cleaned)
        base-count   (count vowel-groups)
        ; Handle silent e at end of word
        silent-e?    (and (> (count cleaned) 2)
                          (= (last cleaned) \e)
                          (not (vowels (nth cleaned (- (count cleaned) 2)))))
        ; Handle -le at end of word
        le-ending?   (and (> (count cleaned) 2)
                          (.endsWith cleaned "le")
                          (not (vowels (nth cleaned (- (count cleaned) 3)))))]
    (cond-> base-count
            silent-e? dec
            le-ending? inc
            ; Ensure at least one syllable
            (zero? base-count) inc)))

; Count vowel clusters

(defn read-n-lines [^java.io.BufferedReader rdr line-count]
  (let [s (StringBuffer.)]
    (dotimes [i line-count]
      (when-let [line (.readLine rdr)]
        (if (pos-int? i)
          (.append s "\n"))
        (.append s line)))
    (.toString s)))


(defn para-seq+ [rdr line-count]
  (when-let [paragraph (read-n-lines rdr line-count)]
    (cons paragraph (lazy-seq (para-seq+ rdr line-count)))))


(with-open [reader (clojure.java.io/reader "/home/pushpankar/temp/anki-automation/crawl-articles.txt")]
  (take 10 (mapcat nlp/detect-sentences (para-seq+ reader 3))))

(with-open [reader (clojure.java.io/reader "/home/pushpankar/temp/anki-automation/crawl-articles.txt")]
  (doall
    (take 10 (line-seq reader))))
(def freqs-lemma
  (with-open [reader (clojure.java.io/reader "/home/pushpankar/temp/anki-automation/crawl-articles.txt")]
    (loop [lines             (mapcat nlp/detect-sentences (para-seq+ reader 3000))
           lemma-frequencies {}]
      (if (empty? lines)
        lemma-frequencies
        (let [line                (first lines)
              words               (nlp/tokenize line)
              lemmas              (nlp/lemmatize (nlp/pos-tag words))
              updated-frequencies (reduce (fn [freqs lemma]
                                            (update freqs lemma (fnil inc 0)))
                                          lemma-frequencies
                                          lemmas)]
          (recur (rest lines) updated-frequencies))))))
(with-open [reader (clojure.java.io/reader "/home/pushpankar/temp/anki-automation/crawl-articles.txt")]
  (doall
    (nlp/detect-sentences
      (nth (para-seq+ reader 300) 10))))

(defn freqs-lemma []
  (with-open [reader (clojure.java.io/reader "/home/pushpankar/temp/anki-automation/crawl-articles.txt")]
    (let [lines         (mapcat nlp/detect-sentences (para-seq+ reader 30000))
          process-batch (fn [batch]
                          (reduce (fn [acc line]
                                    (let [words  (nlp/tokenize line)
                                          lemmas (nlp/lemmatize (nlp/pos-tag words))]
                                      (merge-with + acc (frequencies lemmas))))
                                  {}
                                  batch))
          batches       (partition-all 4000 lines)]
      (count
        (->> (pmap process-batch batches)                   ; Process lines in parallel
             #_(reduce (fn [acc freqs]
                         (merge-with + acc freqs)) {})))
      )))

(nlp/detect-sentences "hello")
(def fdata
  (let [lines      (slurp "/home/pushpankar/temp/anki-automation/crawl-articles.txt")
        #_(with-open [reader (clojure.java.io/reader "/home/pushpankar/temp/anki-automation/crawl-articles.txt")]
                     (doall (mapcat nlp/detect-sentences (para-seq+ reader 3000))))
        batch-size 50000]
    (->> (nlp/detect-sentences lines)
         ;(mapcat nlp/detect-sentences)
         (partition-all batch-size)
         (pmap (fn [batch]
                 (->> batch
                      (reduce (fn [acc line]
                                (let [words  (nlp/tokenize line)
                                      lemmas (nlp/lemmatize (nlp/pos-tag words))]
                                  (merge-with + acc (frequencies lemmas))))
                              {})
                      (filter (fn [[_ v]] (> v 1)))
                      (into {}))))
         (reduce (fn [acc freqs]
                   (merge-with + acc freqs)) {}))))

(def freq-data (freqs-lemma))
(prof/serve-ui 8080)
(count freq-data)
fdata

(spit "freq-lemma.edn" (pr-str fdata))


(def freqs
  (with-open [reader (clojure.java.io/reader "/home/pushpankar/temp/anki-automation/crawl-articles.txt")]
    (loop [lines            (line-seq reader)
           word-frequencies {}]
      (if (empty? lines)
        word-frequencies
        (let [line                (first lines)
              words               (nlp/tokenize line)
              updated-frequencies (reduce (fn [freqs word]
                                            (update freqs (str/lower-case word) (fnil inc 0)))
                                          word-frequencies
                                          words)]
          (recur (rest lines) updated-frequencies))))))

(spit  "resources/anki/word_frequency.edn" (pr-str freqs))


(with-open [f (clojure.java.io/writer "/home/pushpankar/temp/anki-automation/lemma_freqs.csv")]
  (doseq [[word freq s] (->> fdata
                             (mapv (fn [[word c]]
                                     [word c (count-syllables word)]))
                             (sort-by (juxt second #(nth % 2)) #(compare %2 %1))
                             ;(take 60000)
                             )]
    (.write f (str word "\t" freq "\t" s "\n"))))

(with-open [f (clojure.java.io/writer "/home/pushpankar/temp/anki-automation/word_freqs.csv")]
  (for [[word freq] (->> freqs
                         (sort-by val >)
                         (take 50000))]
    [word freq (count-syllables word)]
    #_(.write f (str word "\t" freq "\n"))))
