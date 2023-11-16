const jwt = require('jsonwebtoken');
const { errorResponse } = require('../helpers/http-response');
require('dotenv').config();

const createToken = (userData) => {
    let token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '7d' });

    return token;
}

const verifyToken = (req, res, next) => {
    try {
        if (!req.headers.authorization)
            throw new Error("AUTH_NOT_FOUND");

        const auth = req.headers.authorization.split("Bearer ")[1];
        
        jwt.verify(auth, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(401).json({ status: 401, message: 'Invalid Token' });
            req.user = decoded;
            next();
        });
    } catch (err) {
        if (err.name === "JsonWebTokenError")
            return res.status(401).json({ status: 401, message: err.message });

        if (err.name === "TokenExpiredError")
            return res.status(401).json({ status: 401, message: err.message });

        errorResponse( res, err);
    }
}

module.exports = { createToken, verifyToken };

