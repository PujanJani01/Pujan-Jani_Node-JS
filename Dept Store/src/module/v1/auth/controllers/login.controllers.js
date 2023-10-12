const { errorResponse, successResponse } = require('../../../../helpers/http_response');
const loginService = require('../services/login.services');

const login = async(req, res) => {
    try{
    if(!req.body) return errorResponse(res, "Body is required", 400);
    let reqData = req.body;
    let result = await loginService.login(reqData);
    if(!result) return errorResponse(res, "User not found", 404);
    successResponse(res, result, "Success");
    }catch(error){
        console.log(error);
        errorResponse(res, "Internal server error", 500);
    }
}
module.exports = login;    