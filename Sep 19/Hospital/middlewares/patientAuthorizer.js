async function patientAuthorizer(req, res, next) {
  const user = req.user;
  if (user.role == "patient") return next();
  res.json({status: 401, messege: "Unauthorized"});
  }
  
  module.exports = {patientAuthorizer};