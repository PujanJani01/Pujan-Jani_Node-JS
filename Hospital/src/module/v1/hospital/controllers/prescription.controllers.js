const { errorResponse, successResponse } = require("../../../../helpers/http_response.js");

const prescriptionService = require("../services/prescription.services.js");
const patientService = require("../services/patient.services.js");
const doctorService = require("../services/doctor.services.js");

const prescriptionAll = async (req, res) => {
    try{
    let result = await prescriptionService.prescriptionAll();
    if (result.length == 0) return errorResponse(res, "data Not Found", 404);
    successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, err.message, 500);
    }
}

const prescriptionGet = async (req, res) => {
    try{
    const reqData = { ...req.params };
    let result = await prescriptionService.prescriptionGet(reqData);
    if (result.length == 0) return errorResponse(res, "Prescription Not Found", 404);
    successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, err.message, 500);
    }
}

const prescriptionAdd = async (req, res) => {
    try{
    let pId = { id: req.body.pre_p_id };
    let patient = await patientService.patientGet(pId);
    if (patient.length == 0) return errorResponse(res, "Patient does not exist", 404);
    console.log(req.user);
    const data = Object.assign({}, req.body, req.params, req.query, req.user);
    let result = await prescriptionService.prescriptionAdd(data);
    successResponse(res, result, "Success");
    } catch(err){
        console.log(err);
        errorResponse(res, err.message, 500);
    }
}


const prescriptionDelete = async (req, res) => {
    try{
    let pre = await prescriptionService.prescriptionGet(req.params.id);
    if (pre.length == 0) return errorResponse(res, "Prescription Not Found", 404);
    const reqData = { ...req.params };
    await prescriptionService.prescriptionDelete(reqData);
    successResponse(res, undefined, "Deleted Successfully");
    } catch(err){
        console.log(err);
        errorResponse(res, err.message, 500);
    }
}

module.exports = { prescriptionAll, prescriptionGet, prescriptionAdd, prescriptionDelete };