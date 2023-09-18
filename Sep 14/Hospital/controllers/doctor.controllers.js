const doctorService = require("../services/doctor.services.js");

const getDoctor = (req, res) => {
    const reqData = {...req.params};
    let data = doctorService.getDoctorLogic(reqData);
    res.status(200).json(data);
}

const postDoctor = (req, res) => {
    const reqData = {body: {...req.body}};
    let data = doctorService.postDoctorLogic(reqData);
    res.status(201).json(data);
}

const putDoctor = (req, res) => {
    const reqData = {...req.params,body: {...req.body}};
    let data = doctorService.putDoctorLogic(reqData);
    res.status(200).json(data);
}

const patchDoctor = (req, res) => {
    const reqData = {...req.params,body: {...req.body}};
    let data = doctorService.patchDoctorLogic(reqData);
    res.status(200).json(data);
}

const deleteDoctor = (req, res) => {
    const reqData = {...req.params};
    let data = doctorService.deleteDoctorLogic(reqData);
    res.status(200).json(data);
}

module.exports = { getDoctor, postDoctor, putDoctor, patchDoctor, deleteDoctor };