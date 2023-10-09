const { errorResponse, successResponse } = require("../../../../helpers/http_response.js");
const doctorService = require("../services/doctor.services.js");

const doctorAll = async (req, res) => {
    try {
        let result = await doctorService.doctorAll();
        if (result.length === 0) return errorResponse(res, "Data not found", 404);
        successResponse(res, result[0], "Success");
    } catch (err) {
        console.log(err);
        errorResponse(res, err.message, 500);
    }
}

const doctorGet = async (req, res) => {
    try {
        const userId = { ...req.params };
        let result = await doctorService.doctorGet(userId);
        if (result.length === 0) return errorResponse(res, "Doctor not found", 404);
        successResponse(res, result[0], "Success");
    } catch (err) {
        console.log(err);
        errorResponse(res, err.message, 500);
    }
}

const doctorAdd = async (req, res) => {
    try {
        const data = Object.assign({}, req.body, req.params, req.query);
        let result = await doctorService.doctorAdd(data);
        successResponse(res, result, "Success");
    } catch (err) {
        console.log(err);
        errorResponse(res, err.message, 500);
    }
}

const doctorUpdate = async (req, res) => {
    try {
        let userId = { id: req.params.id };
        let user = await doctorService.doctorGet(userId);
        if (user.length == 0) return errorResponse(res, "Doctor Not Found", 404);
        const data = Object.assign({}, req.body, req.params, req.query);
        await doctorService.doctorUpdate(data);
        successResponse(res, undefined, "Updated Successfully");
    } catch (err) {
        console.log(err);
        errorResponse(res, err.message, 500);
    }
}

const doctorDelete = async (req, res) => {
    try {
        let id = { id: req.params.id };
        let user = await doctorService.doctorGet(id);
        if (user.length == 0) return errorResponse(res, "Doctor not found", 404);
        await doctorService.doctorDelete(id);
        successResponse(res, undefined, "Deleted successfully");
    } catch (err) {
        console.log(err);
        errorResponse(res, err.message, 500);
    }
}

module.exports = { doctorAll, doctorGet, doctorAdd, doctorUpdate, doctorDelete };

