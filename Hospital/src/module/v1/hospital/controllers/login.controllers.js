const  { loginService } = require('../services/login.services');

const loginController = (req, res) => {
    if(!req.body) return res.status(400).json({status: 400, messege: "Login data not found"});
    let reqData = req.body;
    let data = loginService(reqData)
    return res.status(200).json(data);
}
module.exports = { loginController };    