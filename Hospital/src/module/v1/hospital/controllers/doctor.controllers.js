const { errorResponse, successResponse } = require("../../../../helpers/http_response.js");
const { getDoctorService, 
        postDoctorService, 
        putDoctorService,
        deleteDoctorService 
       } = require("../services/doctor.services.js");

const getDoctor = async(req, res) => {
    const reqData = {...req.params};
    let result = await getDoctorService(reqData);
    if(result.length === 0) return errorResponse(res, "Doctor not found", 404);
    successResponse(res, result[0], "Success");
}

const postDoctor = async(req, res) => {
    const data = Object.assign({}, req.body, req.params, req.query);
    let result = await postDoctorService(data);
    successResponse(res, result, "Success");
}

const putDoctor = async (req, res) => {
    let uid = { id: req.params.id };
    let user = await getDoctorService(uid);
    if (user.length == 0) return errorResponse(res, "Doctor Not Found", 404);
    const data = Object.assign({}, req.body, req.params, req.query);
    await putDoctorService(data);
    successResponse(res, null, "Updated Successfully");
}

const deleteDoctor = async(req, res) => {
    let id = { id: req.params.id };
    let user = await getDoctorService(id);
    if (user.length == 0) return errorResponse(res, "Doctor not found", 404);
    await deleteDoctorService(id);
    successResponse(res, null, "Deleted successfully");
}

module.exports = { getDoctor, postDoctor, deleteDoctor, putDoctor };