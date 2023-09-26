const jwt = require('jsonwebtoken');

const createToken = (userData) => { 
    let token = jwt.sign(userData, process.env.SECRET_KEY, { expiresIn: '1d' });
    return token;
}   

const verifyToken = (req, res, next) => {
    try {
        if(!req.headers.auth) return res.status(401).json({ status: 401, message: error.message });
        const token = req.headers.auth;
        const decodedData = jwt.verify(token, process.env.SECRET_KEY);
        // decodedData = undefined; // uncomment this line to test the error handling
        req.user = decodedData;
        next();
    } catch (error) {
        if(error.name === "JsonWebTokenError") return res.status(401).json({ status: 401, message: error.message });
        if(error.name === "TokenExpiredError") return res.status(401).json({ status: 401, message: error.message });
        res.status(500).json({ status: 500, message: 'Internal Server Error'});
    }
}

module.exports = { createToken, verifyToken };



/* 
const { config } = require("../configs/users.js");

function authorizer(req, res, next) {
   if(!req.headers.auth) return res.json({status: 400, messege: "auth header not found"});
   const userToken = req.headers.auth;
   if (!userToken) return res.json({status: 400, messege: "auth header not found"});
   const decodedData = JSON.parse(atob(userToken));
   const user = config.find((user) => user.id == decodedData.id)
   if (!user) return res.json({status: 401, messege: "Authentication failed"});
   req.user = user;
   next();
}

module.exports = {authorizer}; */