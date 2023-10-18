const { successResponse, errorResponse } = require('../../../../helpers/http_response');
const myprofileService = require('../services/userprofile.services');

const myprofileGet = async (req, res) => {
    try {
        let result = await myprofileService.myprofileGet(req.user);
        if(!result) return errorResponse(res, "User Not found", 404);
        successResponse(res, result, "Success");
    } catch (err) {
        console.log(err);
        successResponse(res, "Internal server error", 500);
    }
}

const myprofileUpdate = async (req, res) => {
    try {
        let result = await myprofileService.myprofileUpdate({...req.user, ...req.body});
        if(result == "NotFound") return errorResponse(res, "User Not found", 404);
        successResponse(res, result, "Success");
    } catch (err) {
        console.log(err);
        successResponse(res, "Internal server error", 500);
    }
}

const myprofileDelete = async (req, res) => {
    try {
        let result = await myprofileService.myprofileDelete(req.user);
        if(result == "NotFound") return errorResponse(res, "User Not found", 404);
        successResponse(res, result, "Success");
    } catch (err) {
        console.log(err);
        successResponse(res, "Internal server error", 500);
    }
}

module.exports = { myprofileGet, myprofileUpdate, myprofileDelete }