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

module.exports = {authorizer};