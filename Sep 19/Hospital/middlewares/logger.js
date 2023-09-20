
const {config} = require('../configs/users.js');

const logger = (req, res) => {
    let data = req.body;  
    let user = config.find((user) => user.username == data.username && user.password == data.password);
    if(user){
        let encode = btoa(JSON.stringify({id: user.id, username: user.username, role: user.role}));
        res.json({status: 200, messege: "Ok", data: encode});
    }
    res.json({status: 404, messege: "Login failed"});
}
module.exports = { logger };    