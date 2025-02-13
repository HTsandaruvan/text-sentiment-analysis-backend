const express = require("express");
const { authenticateUser } = require("../middleware/authMiddleware");
const { getProfile, updateProfile } = require("../controllers/userController");

const router = express.Router();

router.get("/profile", authenticateUser, getProfile);
router.put("/profile", authenticateUser, updateProfile);

module.exports = router;
