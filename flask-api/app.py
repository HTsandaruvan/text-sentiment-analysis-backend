from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load sentiment analysis model
sentiment_pipeline = pipeline("sentiment-analysis")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get("text", "")
    
    if not text:
        return jsonify({"error": "No text provided"}), 400
    
    result = sentiment_pipeline(text)
    
    print("API Response:", result)  # 🔍 Debugging: Print output
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=5001)



