const doctorService = require("../services/doctor.services.js");

const getDoctor = (req, res) => {
    let data = doctorService.getDoctorLogic(req);
    res.status(200).json(data);
}

const postDoctor = (req, res) => {
    let data = doctorService.postDoctorLogic(req);
    res.status(201).json(data);
}

const putDoctor = (req, res) => {
    let data = doctorService.putDoctorLogic(req);
    res.status(200).json(data);
}

const patchDoctor = (req, res) => {
    let data = doctorService.patchDoctorLogic(req);
    res.status(200).json(data);
}

const deleteDoctor = (req, res) => {
    let data = doctorService.deleteDoctorLogic(req);
    res.status(200).json(data);
}

module.exports = { getDoctor, postDoctor, putDoctor, patchDoctor, deleteDoctor };