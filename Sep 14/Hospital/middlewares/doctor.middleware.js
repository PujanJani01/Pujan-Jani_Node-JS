
const doctorAuthorizer = (req, res, next) => {
    let decoded = atob(req.get("auth"));
    if(decoded == null) res.send("Invalid credentials");
    if(JSON.parse(decoded).role == "doctor") next();
    res.send("Access denied");
}

module.exports = {doctorAuthorizer};   