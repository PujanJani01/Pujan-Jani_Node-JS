const { successResponse, errorResponse } = require("../../../../helpers/http_response.js");
const { getPatientService, 
    postPatientService, 
    putPatientService,
    deletePatientService 
      } = require("../services/patient.services.js");

const getPatient = async(req, res) => {
    const data = Object.assign({}, req.params, req.query);
    let result = await getPatientService(data);
    if(result.length == 0) return errorResponse(res, "Patient not found", 404);
    successResponse(res, result, "Success");
}

const postPatient = async(req, res) => {
    const data = Object.assign({}, req.body, req.params, req.query);
    let result = await postPatientService(data);
    successResponse(res, result, "Success");
}

const putPatient = async (req, res) => {
    let uid = { id: req.params.id };
    let user = await getPatientService(uid);
    if (user.length == 0) return errorResponse(res, "Patient Not Found", 404);
    const data = Object.assign({}, req.body, req.params, req.query);
    await putPatientService(data);
    successResponse(res, null, "Updated Successfully");
}

const deletePatient = async(req, res) => {
    let id = { id: req.params.id };
    let user = await getPatientService(id);
    if (user.length == 0) return errorResponse(res, "Patient not found", 404);
    const data = Object.assign({}, req.params, req.query);
    await deletePatientService(data);
    successResponse(res, null, "Deleted successfully");
}

module.exports = { getPatient, postPatient, deletePatient, putPatient };