
async function doctorAuthorizer(req, res, next) {
   const user = req.user;
   if (user.role == "doctor") return next();
   res.json({status: 401, messege: "Unauthorized"});
}

module.exports = {doctorAuthorizer};