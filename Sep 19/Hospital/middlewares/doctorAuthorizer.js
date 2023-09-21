
async function doctorAuthorizer(req, res, next) {
   const user = req.user;
   if (user.role !== "doctor") return res.json({status: 401, messege: "Unauthorized"});
   next();
}

module.exports = {doctorAuthorizer};