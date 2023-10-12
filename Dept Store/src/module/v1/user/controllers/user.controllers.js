const userServices = require('../services/user.services');
const { successResponse, errorResponse } = require('../../../../helpers/http_response');

const userAll = async(req, res) => {
    try{
        let result = await userServices.userAll();
        if(!result) return errorResponse(res, "Data not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res,"Internal Server Error", 500);
    }
}

const userGet = async(req, res) => {
    try{
        let result = await userServices.userGet(req.params);
        if(!result) return errorResponse(res, "User not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const userUpdate = async(req, res) => {
    try{
        let result = await userServices.userUpdate({...req.body,...req.params});
        console.log(result);
        if(result == "NoTFound") return errorResponse(res, "User not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}


module.exports = { userAll, userGet, userUpdate };