const { successResponse, errorResponse } = require('../../../../helpers/http_response');
const _studentService = require('../services/student.service');

const studentAdd = async (req, res) => {
    try {
        let data = Object.assign({}, req.body);
        await _studentService.studentAdd(data);
        successResponse(res, undefined, "Student added successfully");
    }
    catch (err) {
        errorResponse(res, err.message);
    }
}

const studentAll = async (req, res) => {
    try {
        if(req.query.fname) {
            let result = await _studentService.studentGetByFname(req.query.fname);
            return successResponse(res, result, "Success");
        }
        const result = await _studentService.studentAll();
        successResponse(res, result, "Success");
    }
    catch (err) {
        errorResponse(res, err.message);
    }
}

const studentGet = async (req, res) => {
    try {
        let data = Object.assign({}, req.params, req.query);
        let result = await _studentService.studentGetById(data);
        if(!result) return errorResponse(res, "Student not found", 404);
        successResponse(res, result, "Success");
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// const studentUpdate = async (req, res) => { 
//     try {
//         let data = Object.assign({}, req.body, req.params, req.query);
//         await _studentService.studentUpdate(data);
//         successResponse(res, null, "Updated successfully");
//     }
//     catch (err) {
//         errorResponse(res, err.message);
//     }
// }

// const studentDelete = async (req, res) => {
//     try {
//         let data = Object.assign({}, req.params, req.query);
//         await _studentService.studentDelete(data);
//         successResponse(res, null, "Deleted successfully");
//     }
//     catch (err) {
//         errorResponse(res, err.message);
//     }
// }

module.exports = { studentAdd, studentAll, studentGet };