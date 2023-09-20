const { getPatientService, 
        postPatientService, 
        putPatientService, 
        patchPatientService, 
        deletePatientService 
      } = require("../services/patient.services.js");

const getPatient = (req, res) => {
    const reqData = {...req.params};
    let data = getPatientService(reqData);
    res.status(200).json(data);
}

const postPatient = (req, res) => {
    const reqData = {body: {...req.body}};
    let data = postPatientService(reqData);
    res.status(201).json(data);
}

const putPatient = (req, res) => {
    const reqData = {...req.params,body: {...req.body}};
    let data = putPatientService(reqData);
    res.status(200).json(data);
}

const patchPatient = (req, res) => {
    const reqData = {...req.params,body: {...req.body}};
    let data = patchPatientService(reqData);
    res.status(200).json(data);
}

const deletePatient = (req, res) => {
    const reqData = {...req.params};
    let data = deletePatientService(reqData);
    res.status(200).json(data);
}

module.exports = { getPatient, postPatient, putPatient, patchPatient, deletePatient };