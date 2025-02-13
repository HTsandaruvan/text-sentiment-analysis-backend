const User = require("../models/User");
const Sentiment = require("../models/Sentiment");

/**
 * @desc Get all users (Admin Only)
 * @route GET /api/admin/users
 * @access Private (Admin)
 */
exports.getAllUsers = async (req, res) => {
    try {
        console.log("✅ Admin fetching all users...");
        const users = await User.find().select("-password");
        res.json(users);
    } catch (err) {
        console.error("❌ Error fetching users:", err.message);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};


/**
 * @desc Get sentiment history of a specific user
 * @route GET /api/admin/user/:userId/sentiment-history
 * @access Private (Admin)
 */
exports.getUserSentimentHistory = async (req, res) => {
    try {
        console.log("🔍 Fetching sentiment history for user:", req.params.userId); // Debugging log
        const history = await Sentiment.find({ user: req.params.userId }).sort({ createdAt: -1 });

        if (!history.length) {
            return res.status(404).json({ message: "No sentiment history found for this user" });
        }

        res.json(history);
    } catch (err) {
        console.error("❌ Server Error:", err);
        res.status(500).json({ message: "Server Error" });
    }
};

/**
 * @desc Update user role (Admin Only)
 * @route PUT /api/admin/user/:userId/role
 * @access Private (Admin)
 */
exports.updateUserRole = async (req, res) => {
    try {
        const { role } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, { role }, { new: true });

        res.json({ message: "User role updated", user: updatedUser });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};

/**
 * @desc Delete a user (Admin Only)
 * @route DELETE /api/admin/user/:userId
 * @access Private (Admin)
 */
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};


// /**
//  * @desc Update user data (Admin Only)
//  * @route PUT /api/admin/user/:userId
//  * @access Private (Admin)
//  */
// exports.updateUserData = async (req, res) => {
//     try {
//         const { name, email } = req.body;
//         const updatedUser = await User.findByIdAndUpdate(req.params.userId, { name, email }, { new: true });
//         res.json({ message: "User updated successfully", user: updatedUser });
//     } catch (err) {
//         res.status(500).json({ message: "Server Error" });
//     }
// };