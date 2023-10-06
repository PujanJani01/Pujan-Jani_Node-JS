const { successResponse, errorResponse } = require('../../../../helpers/http_response');
const _studentService = require('../services/student.service');

const studentAdd = async (req, res) => {
    try {
        let data = Object.assign({}, req.body, req.params, req.query);
        await _studentService.studentAdd(data);
        successResponse(res, null, "Student added successfully");
    }
    catch (err) {
        errorResponse(res, err.message);
    }
}

const studentAll = async (req, res) => {
    try {
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
        let result = await _studentService.studentGet(data);
        if(result.length == 0) return errorResponse(res, "Student not found", 404);
        successResponse(res, result[0], "Success");
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const studentUpdate = async (req, res) => { 
    try {
        let data = Object.assign({}, req.body, req.params, req.query);
        await _studentService.studentUpdate(data);
        successResponse(res, null, "Updated successfully");
    }
    catch (err) {
        errorResponse(res, err.message);
    }
}

const studentDelete = async (req, res) => {
    try {
        let data = Object.assign({}, req.params, req.query);
        await _studentService.studentDelete(data);
        successResponse(res, null, "Deleted successfully");
    }
    catch (err) {
        errorResponse(res, err.message);
    }
}

module.exports = { studentAdd, studentAll, studentGet, studentUpdate , studentDelete };