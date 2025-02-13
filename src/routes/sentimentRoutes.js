const express = require("express");
const { authenticateUser } = require("../middleware/authMiddleware");
const { analyzeSentiment, getSentimentHistory, deleteSentimentHistory } = require("../controllers/sentimentController");

const router = express.Router();

router.post("/analyze", authenticateUser, analyzeSentiment);
router.get("/history", authenticateUser, getSentimentHistory);
router.delete("/history/:id", authenticateUser, deleteSentimentHistory);

module.exports = router;
