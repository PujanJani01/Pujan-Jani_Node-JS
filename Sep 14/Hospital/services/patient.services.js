const patients = require('../data/patient.json');
const fs = require('fs');

const getPatientLogic = (reqData) => {
    if (reqData.id) {
        let patient = patients.find(patient => patient.id == reqData.id);
        if (!patient) return { status: 404, message: "Not Found" };
        return { status: 200, message: "Ok", data: patient };
    }
    return patients;
}

const postPatientLogic = (reqData) => {
    let patient = { ...reqData.body, id: patients.length + 1 };
    patients.push(patient);
    fs.writeFile("./data/patient.json", JSON.stringify(patients), (err) => { if (err) console.log(err) });
    return { status: 201, message: "Created", data: patient };
}

const putPatientLogic = (reqData) => {
    let patientIndex = patients.findIndex(patient => patient.id == reqData.id);
    if (patientIndex == -1) return { status: 404, message: "Not Found" };
    patients[patientIndex] = { ...reqData.body, id: Number(reqData.id) };
    fs.writeFile("./data/patient.json", JSON.stringify(patients), (err) => { if (err) console.log(err) });
    return patients[patientIndex];
}

const patchPatientLogic = (reqData) => {
    let patientIndex = patients.findIndex(patient => patient.id == reqData.id);
    if (patientIndex == -1) return { status: 404, message: "Not Found" };
    patients[patientIndex] = { ...patients[patientIndex], ...reqData.body, id: Number(reqData.id) };
    fs.writeFile("./data/patient.json", JSON.stringify(patients), (err) => { if (err) console.log(err) });
    return patients[patientIndex];
}

const deletePatientLogic = (reqData) => {
    let patientIndex = patients.findIndex(patient => patient.id == reqData.id);
    if (patientIndex == -1) return { status: 404, message: "Not Found" };
    patients.splice(patientIndex, 1);
    fs.writeFile("./data/patient.json", JSON.stringify(patients), (err) => { if (err) console.log(err) });
    return patients;
}

module.exports = { getPatientLogic, postPatientLogic, putPatientLogic, patchPatientLogic, deletePatientLogic };