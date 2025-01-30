(ns com.lucidcode.ide.nlp
  (:import [opennlp.tools.langdetect LanguageDetectorME LanguageDetectorModel]
           [opennlp.tools.sentdetect SentenceDetectorME SentenceModel]
           [opennlp.tools.tokenize TokenizerME TokenizerModel]
           [opennlp.tools.postag POSTaggerME POSModel POSDictionary]
           [opennlp.tools.lemmatizer DictionaryLemmatizer LemmatizerME LemmatizerModel]
           [java.io FileInputStream])
  #_(:import [opennlp.tools.lemmatizer DictionaryLemmatizer]

      [java.io FileInputStream]))


(defmacro load-model [model-class path]
  `(with-open [model-in# (FileInputStream. ~path)]
     (new ~model-class model-in#)))

(defonce language-detector
         (LanguageDetectorME. (load-model LanguageDetectorModel "/home/pushpankar/Projects/LucidFlow_IDE/resources/langdetect-183.bin")))

(defonce en-sentence-detector
         (load-model SentenceModel "/home/pushpankar/Projects/LucidFlow_IDE/resources/opennlp-en-ud-ewt-sentence-1.2-2.5.0.bin"))

(defonce tokenizer
         (load-model TokenizerModel "/home/pushpankar/Projects/LucidFlow_IDE/resources/opennlp-en-ud-ewt-tokens-1.2-2.5.0.bin"))

(defonce pos-tagger
         (load-model POSModel "/home/pushpankar/Projects/LucidFlow_IDE/resources/en-pos-maxent.bin"))

(defonce lemmatizer
         (load-model LemmatizerModel "/home/pushpankar/Projects/LucidFlow_IDE/resources/opennlp-en-ud-ewt-lemmas-1.2-2.5.0.bin"))

(defonce lemmatizer-dt
         (DictionaryLemmatizer.
           (FileInputStream. "/home/pushpankar/Projects/LucidFlow_IDE/resources/en-lemmatizer.dict")))

(defn predict-language [sentence]
  (when-let [lang (.getLang
                    (.predictLanguage language-detector sentence))]
    (keyword lang)))

(def sd-model (load-model SentenceModel "/home/pushpankar/Projects/LucidFlow_IDE/resources/opennlp-en-ud-ewt-sentence-1.2-2.5.0.bin"))

(defn detect-sentences
  "Splits text into sentences.
   Returns a vector of sentences."
  [text]
  (let [model (SentenceDetectorME. en-sentence-detector)]
    (vec (.sentDetect model text))))

;; 3. Tokenization
(defn tokenize
  "Tokenizes a sentence into individual words and punctuation.
   Returns a vector of tokens."
  [sentence]
  (vec (.tokenize (TokenizerME. tokenizer) sentence)))


(defn pos-tag
  "Tags tokens with their parts of speech.
   Takes a vector of tokens, returns a vector of [token tag] pairs."
  [tokens]
  (let [tags (.tag (POSTaggerME. pos-tagger) (into-array String tokens))]
    (mapv vector tokens tags)))




;; 5. Lemmatization
(defn lemmatize
  "Lemmatizes tokens using their POS tags.
   Takes a vector of [token tag] pairs, returns a vector of lemmas."
  [^java.util.List tagged-tokens]
  (let [tokens (mapv first tagged-tokens)
        tags   (mapv second tagged-tokens)
        lemmas (.lemmatize ^LemmatizerME (LemmatizerME. ^LemmatizerModel lemmatizer)
                           (into-array String tokens)
                           (into-array String tags))]
    (vec lemmas)))


(predict-language "He is running now.")
(->> "the cats are running fast."
    tokenize
     pos-tag
     lemmatize
    )




