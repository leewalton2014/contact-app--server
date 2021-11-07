const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
    //get token from header
    const token = req.header("x-auth-token");

    //check if not token
    if (!token) {
        return res.status(400).json({ msg: "No token, please try again." });
    }

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token not valid" });
    }
};