const mongoose = require("mongoose");

const SentimentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    sentiment: { type: String, enum: ["positive", "negative", "neutral"], required: true },
    confidence: { type: Number, required: true }, // Confidence score
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Sentiment || mongoose.model("Sentiment", SentimentSchema);
