const doctors = require('../data/doctor.json');
const fs = require('fs');

const getDoctorLogic = (req, res) => {
    if(req.params.id) {res.status(200).json(doctors.find(doctor => doctor.id == req.params.id)); return;}
    res.status(200).json(doctors)
}   
const postDoctorLogic = (req, res) => {
    let doctor = {...req.body, id: doctors.length + 1 };
    doctors.push(doctor);
    fs.writeFile("../data/doctor.json", JSON.stringify(doctors), (err) => {if(err) console.log(err)});
    res.status(200).json(doctor);
}   
const putDoctorLogic = (req, res) => {
    let doctorID = req.params.id;
    let doctorIndex = doctors.findIndex(doctor => doctor.id == doctorID);
    if(doctorIndex == -1) {res.status(404).json({status: 404, message: "Not Found"});  return;}
    doctors[doctorIndex] = {...req.body, id: Number(doctorID)};
    fs.writeFile("../data/doctor.json", JSON.stringify(doctors), (err) => {if(err) console.log(err)});
    res.status(200).json(doctors[doctorIndex]);
}   
const patchDoctorLogic = (req, res) => {
    let doctorID = req.params.id;
    let doctorIndex = doctors.findIndex(doctor => doctor.id == doctorID);
    if(doctorIndex == -1) {res.status(404).json({status: 404, message: "Not Found"});  return;}
    doctors[doctorIndex] = {...doctors[doctorIndex],...req.body, id: Number(doctorID)};
    fs.writeFile("../data/doctor.json", JSON.stringify(doctors), (err) => {if(err) console.log(err)});
    res.status(200).json(doctors[doctorIndex]);
}   
const deleteDoctorLogic = (req, res) => {
    let doctorID = req.params.id;
    let doctorIndex = doctors.findIndex(doctor => doctor.id == doctorID);
    if(doctorIndex == -1) {res.status(404).json({status: 404, message: "Not Found"});  return;}
    doctors.splice(doctorIndex, 1);
    fs.writeFile("../data/doctor.json", JSON.stringify(doctors), (err) => {if(err) console.log(err)});
    res.status(200).json(doctors);
}   


module.exports = { getDoctorLogic, postDoctorLogic, putDoctorLogic, patchDoctorLogic, deleteDoctorLogic };