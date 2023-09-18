const patientService = require("../services/patient.services.js");

const getPatient = (req, res) => {
    const reqData = {...req.params};
    let data = patientService.getPatientLogic(reqData);
    res.status(200).json(data);
}

const postPatient = (req, res) => {
    const reqData = {body: {...req.body}};
    let data = patientService.postPatientLogic(reqData);
    res.status(201).json(data);
}

const putPatient = (req, res) => {
    const reqData = {...req.params,body: {...req.body}};
    let data = patientService.putPatientLogic(reqData);
    res.status(200).json(data);
}

const patchPatient = (req, res) => {
    const reqData = {...req.params,body: {...req.body}};
    let data = patientService.patchPatientLogic(reqData);
    res.status(200).json(data);
}

const deletePatient = (req, res) => {
    const reqData = {...req.params};
    let data = patientService.deletePatientLogic(reqData);
    res.status(200).json(data);
}

module.exports = { getPatient, postPatient, putPatient, patchPatient, deletePatient };