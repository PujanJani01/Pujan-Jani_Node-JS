const patients = require('../data/patient.json');
const fs = require('fs');

const getPatientLogic = (req, res) => {
    if(req.params.id) {res.status(200).json(patients.find(patient => patient.id == req.params.id)); return;}
    res.json(patients);
}   
const postPatientLogic = (req, res) => {
    let patient = {...req.body, id: patients.length + 1 };
    patients.push(patient);
    fs.writeFile("./data/patient.json", JSON.stringify(patients), (err) => {if(err) console.log(err)});
    res.status(200).json(patient);
}   
const putPatientLogic = (req, res) => {
    let patientID = req.params.id;
    let patientIndex = patients.findIndex(patient => patient.id == patientID);
    if(patientIndex == -1) {res.status(404).json({status: 404, message: "Not Found"});  return;}
    patients[patientIndex] = {...req.body, id: Number(patientID)};
    fs.writeFile("./data/patient.json", JSON.stringify(patients), (err) => {if(err) console.log(err)});
    res.status(201).json(patients[patientIndex]);
}   
const patchPatientLogic = (req, res) => {
    let patientID = req.params.id;
    let patientIndex = patients.findIndex(patient => patient.id == patientID);
    if(patientIndex == -1) {res.status(404).json({status: 404, message: "Not Found"});  return;}
    patients[patientIndex] = {...patients[patientIndex],...req.body, id: Number(patientID)};
    fs.writeFile("./data/patient.json", JSON.stringify(patients), (err) => {if(err) console.log(err)});
    res.status(200).json(patients[patientIndex]);
}   
const deletePatientLogic = (req, res) => {
    let patientID = req.params.id;
    let patientIndex = patients.findIndex(patient => patient.id == patientID);
    if(patientIndex == -1) {res.status(404).json({status: 404, message: "Not Found"});  return;}
    patients.splice(patientIndex, 1);
    fs.writeFile("./data/patient.json", JSON.stringify(patients), (err) => {if(err) console.log(err)});
    res.status(200).json(patients);
}   


module.exports = { getPatientLogic, postPatientLogic, putPatientLogic, patchPatientLogic, deletePatientLogic };