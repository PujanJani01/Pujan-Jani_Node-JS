const { getPaitentService, 
        postPaitentService, 
        deletePaitentService 
      } = require("../services/patient.services.js");

const getPatient = (req, res) => {
    const data = Object.assign({}, req.params, req.query);
    let result = getPaitentService(data);
    res.status(200).json({message: "Success", data: result});
}

const postPatient = (req, res) => {
    const data = Object.assign({}, req.body, req.params, req.query);
    let result = postPaitentService(data);
    res.status(200).json({message: "Success", data: result});
}

const deletePatient = (req, res) => {
    const data = Object.assign({}, req.params, req.query);
    deletePaitentService(data);
    res.status(200).json({message: "Deleted Successfully"});
}

module.exports = { getPatient, postPatient, deletePatient };