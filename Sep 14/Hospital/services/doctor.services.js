const doctors = require('../data/doctor.json');
const fs = require('fs');

const getDoctorLogic = (req) => {
    if(req.params.id) return doctors.find(doctor => doctor.id == req.params.id);
    return doctors;
}   
const postDoctorLogic = (req) => {
    let doctor = {...req.body, id: doctors.length + 1 };
    doctors.push(doctor);
    fs.writeFile("./data/doctor.json", JSON.stringify(doctors), (err) => {if(err) console.log(err)});
    return doctor;
}   
const putDoctorLogic = (req) => {
    let doctorID = req.params.id;
    let doctorIndex = doctors.findIndex(doctor => doctor.id == doctorID);
    if(doctorIndex == -1) return {status: 404, message: "Not Found"};
    doctors[doctorIndex] = {...req.body, id: Number(doctorID)};
    fs.writeFile("./data/doctor.json", JSON.stringify(doctors), (err) => {if(err) console.log(err)});
    return doctors[doctorIndex];
}   
const patchDoctorLogic = (req) => {
    let doctorID = req.params.id;
    let doctorIndex = doctors.findIndex(doctor => doctor.id == doctorID);
    if(doctorIndex == -1) return {status: 404, message: "Not Found"};
    doctors[doctorIndex] = {...doctors[doctorIndex],...req.body, id: Number(doctorID)};
    fs.writeFile("./data/doctor.json", JSON.stringify(doctors), (err) => {if(err) console.log(err)});
    return doctors[doctorIndex];
}   
const deleteDoctorLogic = (req) => {
    let doctorID = req.params.id;
    let doctorIndex = doctors.findIndex(doctor => doctor.id == doctorID);
    if(doctorIndex == -1) return {status: 404, message: "Not Found"};
    doctors.splice(doctorIndex, 1);
    fs.writeFile("./data/doctor.json", JSON.stringify(doctors), (err) => {if(err) console.log(err)});
    return doctors;
}   


module.exports = { getDoctorLogic, postDoctorLogic, putDoctorLogic, patchDoctorLogic, deleteDoctorLogic };