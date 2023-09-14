const patientService = require("../services/patient.services.js");

const getPatient = patientService.getPatientLogic;

const postPatient = patientService.postPatientLogic;

const putPatient = patientService.putPatientLogic;

const patchPatient = patientService.patchPatientLogic;

const deletePatient = patientService.deletePatientLogic;

module.exports = { getPatient, postPatient, putPatient, patchPatient, deletePatient };