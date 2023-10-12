const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    stud_first_name: {
        type: String,
        required: true
    },
    stud_last_name: {
        type: String,
        required: true
    },
    stud_dept: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;