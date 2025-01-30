(ns com.lucidcode.ide.bots.anki-book-parser
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.data.csv :as csv]
            [clojure.tools.reader.edn :as edn]
            [com.lucidcode.ide.bots.dictionary :as dictionary]
            [com.lucidcode.ide.nlp :as nlp]
            [taoensso.telemere :as log])
  (:import [org.apache.tika.parser.epub EpubParser]
           [org.apache.tika.metadata Metadata]
           [org.apache.tika.parser ParseContext]
           [org.apache.tika.sax BodyContentHandler]
           [java.io FileInputStream PushbackReader]))

(defn extract-epub-chapters
  "Extracts all chapters from an EPUB file and returns them as a string.
   Parameters:
   - epub-path: String path to the EPUB file
   Returns:
   - String containing all chapters concatenated together"
  [epub-path]
  (try
    (let [parser       (EpubParser.)
          handler      (BodyContentHandler. -1)             ; -1 means no length limit
          metadata     (Metadata.)
          context      (ParseContext.)
          input-stream (FileInputStream. epub-path)]

      ; Parse the EPUB file
      (.parse parser input-stream handler metadata context)

      ; Get the content as string
      (let [content (.toString handler)]
        (.close input-stream)
        content))
    (catch Exception e
      (println "Error processing EPUB file:" (.getMessage e))
      nil)))


(defn- proper-noun-simple? [word sentences]
  (let [word-regex         (re-pattern (str "(?i)\\b" (java.util.regex.Pattern/quote word) "\\b")) ;; Case-insensitive regex for the word
        get-matching-words (fn [sentence]
                             (->> (re-seq word-regex sentence)
                                  (map #(-> % first str))))
        capitalized?       #(Character/isUpperCase (first %))
        word-forms         (->> sentences
                                (mapcat get-matching-words) ;; Get all occurrences of the word in the sentences
                                set)                        ;; Unique forms of the word
        ]
    #_(log/log! :info {:word       word
                       :word-forms word-forms})
    (every? capitalized? word-forms)))


(defn- proper-noun? [lemma sentences]
  (letfn [(proper-noun-in-one-sentence [sentence]
            (let [pos-tags (-> sentence
                               nlp/tokenize
                               nlp/pos-tag)
                  lemmas   (nlp/lemmatize pos-tags)]
              (->> (map vector lemmas (mapv second pos-tags))
                   (filter #(= (first %) lemma))
                   (every? #(= (second %) "PROPN")))))]
    (every? proper-noun-in-one-sentence sentences)))

(defonce word-freq-db
         (with-open [r (io/reader "resources/anki/word_frequency.edn")]
           (edn/read (PushbackReader. r))))

(defn extract-difficult-words [filepath]
  (let [book-text         (extract-epub-chapters filepath)
        to-words          (fn to-words [sentence]
                            (-> sentence
                                (str/replace #"[^\w\s]" " ")
                                (str/split #"\s+")
                                (#(remove str/blank? %))
                                (#(map str/lower-case %))))
        #_book-words-freqs  #_(-> book-text
                                  (str/split #"\s+")
                                  (#(mapv str/lower-case %))
                                  frequencies)
        ;; I also need to keep track of the sentence from where it was parsed
        sentences         (-> book-text
                              (str/replace #"\r?\n" " ")    ;; Replace newlines with spaces
                              (str/split #"[.!?]+")
                              (#(mapv str/triml %)))        ;; Split text into sentences based on punctuation
        word-to-sentences (reduce (fn [acc sentence]
                                    (reduce (fn [acc word]
                                              (update acc word (fnil conj []) sentence)) acc (to-words sentence)))
                                  {}
                                  sentences)
        first-occurrences (->> sentences
                               (mapcat to-words)
                               flatten
                               (map-indexed vector)
                               (reduce (fn [coll [idx word]]
                                         (if-not (contains? coll word)
                                           (assoc coll word idx)
                                           coll)) {}))
        ordered-words     (->> (keys first-occurrences)
                               (filter #(contains? dictionary/dictionary %))
                               (sort-by #(get word-freq-db % 0))
                               (take 700)
                               (sort-by #(get first-occurrences %)))
        #_(->> book-words-freqs
               ;; remove the ones not in my word collection and keep the word to count mapping
               ;(#(select-keys % (keys my-word-collection)))
               (filter (fn [[_ freq]]
                         (>= freq 2)))
               (into {})
               (sort-by (fn [[word _]]
                          (get word-freq-db word 0)) <))]
    ;ordered-words
    (vec (for [word ordered-words
               :when (not (proper-noun-simple? word (get word-to-sentences word)))]
           [word (quot (get first-occurrences word) 250) (rand-nth (get word-to-sentences word))]))))
#_(extract-difficult-words "/home/pushpankar/Documents/pg1342-images.epub")


(defn extract-difficult-words-lemma-based [filepath]
  (let [book-text           (extract-epub-chapters filepath)
        to-words            nlp/tokenize
        book-lemma-freqs    (->> book-text
                                 nlp/detect-sentences       ; Split the text into sentences
                                 (pmap (fn [sentence]
                                         (->> sentence
                                              nlp/tokenize
                                              nlp/pos-tag
                                              nlp/lemmatize
                                              frequencies))) ; Process each sentence in parallel
                                 (apply merge-with +))
        ;; I also need to keep track of the sentence from where it was parsed
        sentences           (-> book-text
                                nlp/detect-sentences)
        lemma-to-sentences  (reduce (fn [acc sentence]
                                      (let [lemmas (-> sentence nlp/tokenize nlp/pos-tag nlp/lemmatize)]
                                        (reduce (fn [acc lemma]
                                                  (update acc lemma (fnil conj []) sentence)) acc lemmas)))
                                    {}
                                    sentences)
        my-lemma-collection {}                              ;vocab/fdata
        ordered-lemmas      (->> book-lemma-freqs
                                 ;; remove the ones not in my word collection and keep the word to count mapping
                                 (#(select-keys % (keys my-lemma-collection)))
                                 (filter (fn [[_ freq]]
                                           (>= freq 2)))
                                 (into {})
                                 (sort-by (fn [[word _]]
                                            (get my-lemma-collection word 0)) <))]
    (vec (for [[lemma freq] ordered-lemmas
               :when (not (proper-noun? lemma (get lemma-to-sentences lemma)))]
           [lemma freq (rand-nth (get lemma-to-sentences lemma))]))))


(comment

  (extract-difficult-words
    "/home/pushpankar/Documents/Frank Herbert - Dune (2020, Orion Publishing Group) - libgen.li.epub")

  (extract-difficult-words-lemma-based
    "/home/pushpankar/Downloads/Frank Herbert - Dune (2020, Orion Publishing Group) - libgen.li.epub")

  (with-open [f (io/writer "/home/pushpankar/temp/anki-automation/dune1-all-book-words.words.csv")]
    #_(extract-difficult-words-lemma-based
        "/home/pushpankar/Downloads/Frank Herbert - Dune (2020, Orion Publishing Group) - libgen.li.epub")
    (csv/write-csv f (extract-difficult-words
                       "/home/pushpankar/Downloads/Frank Herbert - Dune (2020, Orion Publishing Group) - libgen.li.epub")
                   :separator \tab)))