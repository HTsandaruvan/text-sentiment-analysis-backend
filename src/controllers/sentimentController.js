const Sentiment = require("../models/Sentiment");
// ✅ Import Sentiment Analysis Library
// const natural = require("natural");
// const analyzer = new natural.SentimentAnalyzer("English", natural.PorterStemmer, "afinn");

/**
 * @desc Store a new sentiment analysis result
 * @route POST /api/sentiment/analyze
 * @access Private (Logged-in users)
 */
const axios = require("axios"); // Import axios to make API requests


// Flask API URL
const FLASK_API_URL = "http://127.0.0.1:5001/predict"; // Change to Render URL after deployment


exports.analyzeSentiment = async (req, res) => {
    try {
        console.log("🔍 Received Request Body:", req.body); // ✅ Debug request data

        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ message: "Text input is required." });
        }

        // ✅ Send request to Flask API
        const flaskResponse = await axios.post(FLASK_API_URL, { text });

        console.log("✅ Flask Response:", flaskResponse.data); // Debug API response

        // ✅ Extract label & score (fix: extract from array)
        const { label, score } = flaskResponse.data[0] || {}; // ✅ FIX HERE

        // ✅ Ensure label exists before calling `.toLowerCase()`
        if (!label || score === undefined) {
            return res.status(500).json({ message: "Invalid response from sentiment API" });
        }

        // ✅ Convert Flask `label` format (uppercase) to lowercase for MongoDB
        const sentimentLabel = label.toLowerCase(); // e.g., "POSITIVE" → "positive"

        // ✅ Save the result in MongoDB
        const newEntry = new Sentiment({
            user: req.user.id,
            text,
            sentiment: sentimentLabel, // ✅ Now defined
            confidence: score  // ✅ Now defined
        });

        await newEntry.save();
        console.log("✅ Sentiment Saved:", newEntry);

        res.status(201).json({ message: "Sentiment analysis saved", data: newEntry });
    } catch (err) {
        console.error("❌ Server Error:", err);
        res.status(500).json({ message: "Server Error" });
    }
};


/**
 * @desc Get user's sentiment history
 * @route GET /api/sentiment/history
 * @access Private (Logged-in users)
 */
exports.getSentimentHistory = async (req, res) => {
    try {
        console.log("🔍 Incoming Request:", req.headers);
        console.log("🔍 Authenticated User ID:", req.user?.id);

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: No user data found." });
        }

        const history = await Sentiment.find({ user: req.user.id }).sort({ createdAt: -1 });
        console.log("✅ Retrieved Sentiment History:", history);

        res.json(history);
    } catch (err) {
        console.error("❌ Server Error:", err);
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteSentimentHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const sentiment = await Sentiment.findById(id);

        if (!sentiment) {
            return res.status(404).json({ message: "Sentiment history not found." });
        }

        if (sentiment.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to delete this entry." });
        }

        await Sentiment.findByIdAndDelete(id);
        res.json({ message: "Sentiment history deleted successfully." });
    } catch (err) {
        console.error("❌ Error deleting sentiment history:", err);
        res.status(500).json({ message: "Server Error" });
    }
};