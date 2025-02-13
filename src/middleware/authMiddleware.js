const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Middleware to authenticate users (checks if the user is logged in)
 */
exports.authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");

    console.log("🔍 Received Authorization Header:", token); // ✅ Debug token in backend

    if (!token) return res.status(401).json({ message: "Access Denied. No token provided." });

    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid Token" });
    }
};


/**
 * Middleware to authorize specific roles (admin-only routes, etc.)
 */
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: You don't have permission." });
        }
        next();
    };
};


