const  { registerService } = require('../services/register.services');

const registerController = (req, res) => {
    let data = req.body;  
    return res.status(200).json(registerService(data));
}
module.exports = { registerController };    