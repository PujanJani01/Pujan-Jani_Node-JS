const { successResponse, errorResponse } = require('../../../../helpers/http_response');
const usercartService = require('../services/usercart.services');

const usercartGet = async (req, res) => {
    try {
        let result = await usercartService.usercartGet(req.user);
        if(!result) return errorResponse(res, "Cart Not found", 404);
        successResponse(res, result, "Success");
    } catch (err) {
        console.log(err);
        successResponse(res, "Internal server error", 500);
    }
}

const usercartAdd = async (req, res) => {
    try {
        let result = await usercartService.usercartAdd(req.body, req.user);
        if(result == "Already Exists") return errorResponse(res, "Cart Already Exists", 409);
        successResponse(res, undefined, "Success");
    } catch (err) {
        console.log(err);
        successResponse(res, "Internal server error", 500);
    }
}

const usercartUpdate = async (req, res) => {
    try {
        let result = await usercartService.usercartUpdate({...req.user, ...req.body});
        if(result == "NotFound") return errorResponse(res, "User Not found", 404);
        successResponse(res, undefined, "Success");
    } catch (err) {
        console.log(err);
        successResponse(res, "Internal server error", 500);
    }
}

const usercartDelete = async (req, res) => {
    try {
        let result = await usercartService.usercartDelete(req.user);
        if(result == "NotFound") return errorResponse(res, "User Not found", 404);
        successResponse(res, undefined, "Success");
    } catch (err) {
        console.log(err);
        successResponse(res, "Internal server error", 500);
    }
}

module.exports = { usercartGet, usercartUpdate, usercartDelete, usercartAdd }