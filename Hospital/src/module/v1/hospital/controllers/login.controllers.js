const { errorResponse, successResponse } = require('../../../../helpers/http_response');
const  { loginService } = require('../services/login.services');

const loginController = async(req, res) => {
    if(!req.body) return errorResponse(res, "Body is required", 400);
    let reqData = req.body;
    let result = await loginService(reqData);
    successResponse(res, result, "Success");
}
module.exports = { loginController };    