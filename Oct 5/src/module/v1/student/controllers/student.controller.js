const _studentService = require('../services/student.service');

const studentAdd = async (req, res) => {
    try {
        let data = Object.assign({}, req.body, req.params, req.query);
        await _studentService.studentAdd(data);
        res.status(200).json({ message: "Student added successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const studentAll = async (req, res) => {
    try {
        const result = await _studentService.studentAll();
        res.status(200).json({ message: "Students fetched successfully", data: result});
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const studentGet = async (req, res) => {
    try {
        let data = Object.assign({}, req.params, req.query);
        let result = await _studentService.studentGet(data);
        res.status(200).json({ message: "Student fetched successfully", data: result});
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports ={ studentAdd, studentAll, studentGet };