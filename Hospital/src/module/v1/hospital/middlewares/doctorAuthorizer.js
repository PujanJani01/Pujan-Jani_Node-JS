
async function doctorAuthorizer(req, res, next) {
   const user = req.user;
   if (user.u_role !== "doctor") return res.json({status: 401, messege: "Unauthorized"});
   next();
}

module.exports = {doctorAuthorizer};