const {config} = require('../configs/users');

const logger = (req, res, next) => {
    let query = req.query;
    let user = config.find(user => user.username == query.username && user.password == Number(query.password));
    if(user){
        let encode = btoa(JSON.stringify({id: user.id, username: user.username, role: user.role}));
        req.headers["auth"] = encode;
        next();
    }
    else  res.send("Login failed");
}
module.exports = { logger };