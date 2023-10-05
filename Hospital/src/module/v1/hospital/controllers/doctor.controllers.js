const { getDoctorService, 
        postDoctorService, 
        deleteDoctorService 
       } = require("../services/doctor.services.js");

const getDoctor = async(req, res) => {
    const reqData = {...req.params};
    let result = await getDoctorService(reqData);
    if(Object.entries(result).length === 0) return res.status(404).json({message: "Not Found"});
    res.status(200).json({message: "Success", data: result});
}

const postDoctor = async(req, res) => {
    const data = Object.assign({}, req.body, req.params, req.query);
    let result = await postDoctorService(data);
    res.status(201).json({message: "Success", data: result});
}

const deleteDoctor = async(req, res) => {
    const reqData = {...req.params};
    let data = await deleteDoctorService(reqData);
    res.status(200).json(data);
}

module.exports = { getDoctor, postDoctor, deleteDoctor };