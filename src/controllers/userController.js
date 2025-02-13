const User = require("../models/User");

/**
 * @desc Get user profile details
 * @route GET /api/user/profile
 * @access Private (Logged-in users only)
 */
exports.getProfile = async (req, res) => {
    try {
        console.log("🔍 Incoming Request User ID:", req.user?.id); // ✅ Debug

        if (!req.user?.id) {
            return res.status(401).json({ message: "Unauthorized: No user ID found" });
        }

        const user = await User.findById(req.user.id).select("-password");

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({ user });
    } catch (err) {
        console.error("🚨 Server Error in getProfile:", err);
        res.status(500).json({ message: "Server Error" });
    }
};



/**
 * @desc Update user profile
 * @route PUT /api/user/profile
 * @access Private (Logged-in users only)
 */
exports.updateProfile = async (req, res) => {
    console.log("User ID from token:", req.user?.id);

    try {
        console.log("📥 Received Data:", req.body);
        console.log("📸 Uploaded File:", req.file);

        const { name, email, address, contactNumber } = req.body;
        let profilePicture = req.file ? `/uploads/${req.file.filename}` : req.body.profilePicture;

        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
            address,
            contactNumber,
            profilePicture
        }, { new: true });

        console.log("✅ Updated User:", updatedUser);

        res.json({ success: true, user: updatedUser });
    } catch (error) {
        console.error("❌ Error updating profile:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
