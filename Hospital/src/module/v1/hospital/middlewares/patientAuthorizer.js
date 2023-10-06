async function patientAuthorizer(req, res, next) {
  const user = req.user;
  if (user.u_role !== "patient") return  res.json({status: 401, messege: "Unauthorized"});
  next();
  }
  
  module.exports = {patientAuthorizer};