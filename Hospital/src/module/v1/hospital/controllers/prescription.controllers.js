const { errorResponse, successResponse } = require("../../../../helpers/http_response.js");

const { getPrescriptionService,
    postPrescriptionService,
    // putPrescriptionService,
    deletePrescriptionService
} = require("../services/prescription.services.js");
const { getPatientService } = require("../services/patient.services.js");

const getPrescription = async (req, res) => {
    const reqData = { ...req.params };
    let result = await getPrescriptionService(reqData);
    if (result.length == 0) return errorResponse(res, "Prescription Not Found", 404);
    successResponse(res, result, "Success");
}

const postPrescription = async (req, res) => {
    let uid = { id: req.body.pre_p_id };
    let user = await getPatientService(uid);
    if (user.length == 0) return errorResponse(res, "Prescription Not Found", 404);
    const data = Object.assign({}, req.body, req.params, req.query);
    let result = await postPrescriptionService(data);
    successResponse(res, result, "Success");
}

/* const putPrescription = async (req, res) => {
    let uid = { id: req.params.id };
    let user = await getPatientService(uid);
    if (user.length == 0) return errorResponse(res, "Prescription Not Found", 404);
    const data = Object.assign({}, req.body, req.params, req.query);
    await putPrescriptionService(data);
    successResponse(res, null, "Updated Successfully");
} */

const deletePrescription = async (req, res) => {
    let uid = { id: req.body.pre_p_id };
    let user = await getPatientService(uid);
    if (user.length == 0) return errorResponse(res, "Prescription Not Found", 404);
    const reqData = { ...req.params };
    let data = await deletePrescriptionService(reqData);
    successResponse(res, null, "Deleted Successfully");
}

module.exports = { getPrescription, postPrescription, deletePrescription, /* putPrescription */ };