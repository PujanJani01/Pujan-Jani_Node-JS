const { getDoctorService, 
        postDoctorService, 
        putDoctorService, 
        patchDoctorService, 
        deleteDoctorService 
       } = require("../services/doctor.services.js");

const getDoctor = (req, res) => {
    const reqData = {...req.params};
    let data = getDoctorService(reqData);
    res.status(200).json(data);
}

const postDoctor = (req, res) => {
    const reqData = {body: {...req.body}};
    let data = postDoctorService(reqData);
    res.status(201).json(data);
}

const putDoctor = (req, res) => {
    const reqData = {...req.params,body: {...req.body}};
    let data = putDoctorService(reqData);
    res.status(200).json(data);
}

const patchDoctor = (req, res) => {
    const reqData = {...req.params,body: {...req.body}};
    let data = patchDoctorService(reqData);
    res.status(200).json(data);
}

const deleteDoctor = (req, res) => {
    const reqData = {...req.params};
    let data = deleteDoctorService(reqData);
    res.status(200).json(data);
}

module.exports = { getDoctor, postDoctor, putDoctor, patchDoctor, deleteDoctor };