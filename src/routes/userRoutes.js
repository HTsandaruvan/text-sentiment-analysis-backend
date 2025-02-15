const express = require("express");
const { authenticateUser } = require("../middleware/authMiddleware");
const { getProfile, updateProfile } = require("../controllers/userController");
const upload = require("../middleware/uploadMiddleware"); // ✅ Import upload middleware

const router = express.Router();


router.get("/profile", authenticateUser, getProfile);
router.put("/profile", authenticateUser, upload.single("profilePicture"), updateProfile);

module.exports = router;
