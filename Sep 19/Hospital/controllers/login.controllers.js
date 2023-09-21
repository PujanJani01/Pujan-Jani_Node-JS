const  { loggerService } = require('../services/login.services');

const loggerController = (req, res) => {
    let data = req.body;  
    return res.status(200).json(loggerService(data));
}
module.exports = { loggerController };    