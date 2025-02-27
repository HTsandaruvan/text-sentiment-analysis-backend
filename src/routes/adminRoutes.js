const express = require("express");
const { authenticateUser, authorizeRoles } = require("../middleware/authMiddleware");
const { getAllUsers, getUserSentimentHistory, updateUserRole, deleteUser, updateUserDetails, createUser } = require("../controllers/adminController");

const router = express.Router();

router.get("/users", authenticateUser, authorizeRoles("admin"), getAllUsers);
router.get("/user/:userId/sentiment-history", authenticateUser, authorizeRoles("admin"), getUserSentimentHistory);
router.delete("/user/:userId", authenticateUser, authorizeRoles("admin"), deleteUser);
router.put("/user/:userId/role", authenticateUser, authorizeRoles("admin"), updateUserRole);
router.put("/user/:userId", authenticateUser, authorizeRoles("admin"), updateUserDetails);
router.post("/user", authenticateUser, authorizeRoles("admin"), createUser);

module.exports = router;
