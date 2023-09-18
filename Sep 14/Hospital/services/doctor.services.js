const doctors = require('../data/doctor.json');
const fs = require('fs');

const getDoctorLogic = (reqData) => {
    if (reqData.id) {
        let doctor = doctors.find(doctor => doctor.id == reqData.id);
        if (!doctor) return { status: 404, message: "Not Found" };
        return { status: 200, message: "Ok", data: doctor };
    }
    return doctors;
}

const postDoctorLogic = (reqData) => {
    let doctor = { ...reqData.body, id: doctors.length + 1 };
    doctors.push(doctor);
    fs.writeFile("./data/doctor.json", JSON.stringify(doctors), (err) => { if (err) console.log(err) });
    return { status: 201, message: "Created", data: doctor };
}

const putDoctorLogic = (reqData) => {
    let doctorIndex = doctors.findIndex(doctor => doctor.id == reqData.id);
    if (doctorIndex == -1) return { status: 404, message: "Not Found" };
    doctors[doctorIndex] = { ...reqData.body, id: Number(reqData.id) };
    fs.writeFile("./data/doctor.json", JSON.stringify(doctors), (err) => { if (err) console.log(err) });
    return doctors[doctorIndex];
}

const patchDoctorLogic = (reqData) => {
    let doctorIndex = doctors.findIndex(doctor => doctor.id == reqData.id);
    if (doctorIndex == -1) return { status: 404, message: "Not Found" };
    doctors[doctorIndex] = { ...doctors[doctorIndex], ...reqData.body, id: Number(reqData.id) };
    fs.writeFile("./data/doctor.json", JSON.stringify(doctors), (err) => { if (err) console.log(err) });
    return doctors[doctorIndex];
}

const deleteDoctorLogic = (reqData) => {
    let doctorIndex = doctors.findIndex(doctor => doctor.id == reqData.id);
    if (doctorIndex == -1) return { status: 404, message: "Not Found" };
    doctors.splice(doctorIndex, 1);
    fs.writeFile("./data/doctor.json", JSON.stringify(doctors), (err) => { if (err) console.log(err) });
    return doctors;
}

module.exports = { getDoctorLogic, postDoctorLogic, putDoctorLogic, patchDoctorLogic, deleteDoctorLogic };