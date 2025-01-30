from flask import Flask, request, jsonify
from nltk.corpus import wordnet as wn
from transformers import pipeline, AutoTokenizer, AutoModelForSequenceClassification
import json

# Initialize Flask
app = Flask(__name__)

# Load a pre-trained model for text similarity
# model_name = "sentence-transformers/all-MiniLM-L6-v2"
model_name = "sentence-transformers/all-mpnet-base-v2"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

# Function to compute similarity score
from torch.nn.functional import cosine_similarity
import torch


def compute_similarity(sentence_embedding, definition_embedding):
    return cosine_similarity(sentence_embedding, definition_embedding)


# Hugging Face pipeline for sentence embeddings
embedder = pipeline("feature-extraction", model=model_name, tokenizer=model_name)

with open("../../../../../resources/anki/dictionary.json") as f:
    local_dict = json.load(f)


def get_best_meaning(word, sentence):
    """
    Get the most relevant meaning of the word in the context of the sentence.
    """

    # Generate sentence embedding
    sentence_embedding = torch.tensor(embedder(sentence)).mean(dim=1)

    # Get all synsets (meanings) of the word
    synsets = wn.synsets(word)

    if word in local_dict:
        definitions = local_dict.get(word).splitlines()
        # sort and return like the following

        # Rank definitions based on similarity
        scored_definitions = []
        for definition in definitions:
            definition_embedding = torch.tensor(embedder(definition)).mean(dim=1)
            similarity = compute_similarity(sentence_embedding, definition_embedding)
            scored_definitions.append((definition, similarity.item()))

        # Sort definitions by similarity score in descending order
        scored_definitions.sort(key=lambda x: x[1], reverse=True)

        # Return the best match
        best_definition = scored_definitions[0]

        return {
            "word": word,
            "context": sentence,
            "best_meaning": best_definition[0],
            "score": best_definition[1]
        }
    else:
        # Rank meanings based on similarity to context
        scored_synsets = []
        for synset in synsets:
            definition = synset.definition()
            definition_embedding = torch.tensor(embedder(definition)).mean(dim=1)
            similarity = compute_similarity(sentence_embedding, definition_embedding)
            scored_synsets.append((synset.name(), definition, similarity.item()))

        # Sort by similarity score in descending order
        scored_synsets.sort(key=lambda x: x[2], reverse=True)

        # Return the best meaning
        best_synset = scored_synsets[0]
        return {
            "word": word,
            "context": sentence,
            "best_meaning": best_synset[1],
            "score": best_synset[2]
        }


@app.route('/api/meaning', methods=['POST'])
def get_meaning():
    # Parse request JSON
    data = request.json
    sentence = data.get("sentence")
    word = data.get("word")

    if not sentence or not word:
        return jsonify({"error": "Both 'sentence' and 'word' are required"}), 400

    # Get the best meaning for the word in context
    result = get_best_meaning(word, sentence)
    return jsonify(result)

@app.route("/api/save-user-email", methods=['POST'])
def save_user_email():
    with open("./user-emails.txt", "a") as f:
        data = request.json
        print(data)
        print(data.get("user-email"), file=f)
    return "ok"



if __name__ == '__main__':
    app.run(debug=True, port=5001)
