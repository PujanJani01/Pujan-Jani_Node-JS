const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/college')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log("MongoDB Error",err));

const studentSchema = new mongoose.Schema({
    stud_id : {
        type : Number,
        required : true,
        unique : true
    },
    stud_first_name : {
        type : String,
        required : true
    },
    stud_last_name : {
        type : String,
        required : true
    },
    stud_dept : {
        type : String,
        required : true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;