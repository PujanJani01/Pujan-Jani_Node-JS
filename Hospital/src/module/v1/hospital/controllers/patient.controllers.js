const { successResponse, errorResponse } = require("../../../../helpers/http_response.js");
const patientService = require("../services/patient.services.js");

const patientAll = async (req, res) => {
    try {
        let result = await patientService.patientAll();
        if (result.length == 0) return errorResponse(res, "Data not found", 404);
        successResponse(res, result, "Success");
    } catch (error) {
        errorResponse(res, error.message, 500);
    }

}

const patientGet = async (req, res) => {
    try {
        const data = Object.assign({}, req.params, req.query);
        let result = await patientService.patientGet(data);
        if (result.length == 0) return errorResponse(res, "Patient not found", 404);
        successResponse(res, result, "Success");
    } catch (error) {
        errorResponse(res, error.message, 500);
    }
}

const patientAdd = async (req, res) => {
    try {
        const data = Object.assign({}, req.body, req.params, req.query);
        let result = await patientService.patientAdd(data);
        successResponse(res, result, "Success");
    } catch (error) {
        errorResponse(res, error.message, 500);
    }
}

const patientUpdate = async (req, res) => {
    try {
        let userId = { id: req.params.id };
        let user = await patientService.patientGet(userId);
        if (user.length == 0) return errorResponse(res, "Patient Not Found", 404);
        const data = Object.assign({}, req.body, req.params, req.query);
        await patientService.patientUpdate(data);
        successResponse(res, null, "Updated Successfully");
    } catch (error) {
        errorResponse(res, error.message, 500);
    }
}

const patientDelete = async (req, res) => {
    try {
        let id = { id: req.params.id };
        let user = await patientService.patientGet(id);
        if (user.length == 0) return errorResponse(res, "Patient not found", 404);
        const data = Object.assign({}, req.params, req.query);
        await patientService.patientDelete(data);
        successResponse(res, null, "Deleted successfully");
    } catch (error) {
        errorResponse(res, error.message, 500);
    }
}

module.exports = { patientAll, patientGet, patientAdd, patientUpdate, patientDelete };