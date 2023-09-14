const doctorService = require("../services/doctor.services.js");

const getDoctor = doctorService.getDoctorLogic;

const postDoctor = doctorService.postDoctorLogic;

const putDoctor = doctorService.putDoctorLogic;

const patchDoctor = doctorService.patchDoctorLogic;

const deleteDoctor = doctorService.deleteDoctorLogic;

module.exports = { getDoctor, postDoctor, putDoctor, patchDoctor, deleteDoctor };