
const student = require('../../../../db/db.con')

const studentAdd = async(data) => {
    try{
        await student.create(data);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = { studentAdd };
// const studentAll = async() => {
//     try{
//         const query = `SELECT * FROM student2`;
//         const result = await pool.query(query);
//         return result[0];
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// const studentGet = async(data) => {
//     try{
//         const query = `SELECT * FROM student2 WHERE stud_id = ${data.id}`;
//         const result = await pool.query(query);
//         return result[0];
//     }
//     catch(err){
//         console.log(err);
//     }
// }

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

// module.exports = { studentAdd, studentAll, studentGet, studentUpdate, studentDelete };