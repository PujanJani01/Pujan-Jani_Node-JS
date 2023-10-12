
const student = require('../../../../model/student.model')

const studentAdd = async(data) => {
    try{
        await student.create(data);
    }
    catch(err){
        console.log(err);
    }
}

const studentAll = async() => {
    try{
        const result = await student.find({});
        return result;
    }
    catch(err){
        console.log(err);
    }
}

const studentGetById = async(data) => {
    try{
        const result = await student.findOne({ _id : data.id});
        return result;
    }
    catch(err){
        console.log(err);
    }
}

const studentGetByFname = async(fname) => {
    try{
        const regex = new RegExp(fname, 'i');
        const result = await student.find({ stud_first_name : regex});
        return result;
    }
    catch(err){
        console.log(err);
    }
}

// const studentUpdate = async(data) => {
//     try{
//         const query = `UPDATE student2 
//                        SET stud_first_name = ?, stud_last_name = ?, stud_dept = ? 
//                        WHERE stud_id = ?`;
//         await pool.query(query, [data.stud_first_name, data.stud_last_name, data.stud_dept, data.id]);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// const studentDelete = async(data) => {
//     try{
//         const query = `DELETE FROM student2 WHERE stud_id = ?`;
//         await pool.query(query, [data.id]);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

module.exports = { studentAdd, studentAll, studentGetById, studentGetByFname };
