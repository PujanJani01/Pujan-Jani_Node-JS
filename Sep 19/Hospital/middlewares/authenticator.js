const { config } = require("../configs/users.js");

function authenicator(req, res, next) {
   if(!req.headers.auth) return res.json({status: 404, messege: "Headers not found"});
   const userToken = req.headers.auth;
   const data = JSON.parse(atob(userToken));
   if (!userToken) return res.json({status: 401, messege: "Authentication failed"});
   const user = config.find((user) => user.id == data.id)
   if (!user) return res.json({status: 401, messege: "Authentication failed"});
   req.user = user;
   next();
}

module.exports = {authenicator};