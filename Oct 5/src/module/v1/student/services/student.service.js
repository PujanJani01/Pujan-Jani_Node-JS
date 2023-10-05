const pool = require('../../../../db/db.con');

const studentAdd = async(data) => {
    try{
        const fields = ['stud_first_name', 'stud_last_name', 'stud_dept'];
        const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
        const query = `INSERT INTO student2(${fields.join()})
                       VALUES(${placeholders})`;
        const result = await pool.query(query, [data.stud_first_name, data.stud_last_name, data.stud_dept]);

    }
    catch(err){
        console.log(err);
    }
}

const studentAll = async() => {
    try{
        const query = `SELECT * FROM student2`;
        const result = await pool.query(query);
        return result[0];
    }
    catch(err){
        console.log(err);
    }
}

const studentGet = async(data) => {
    try{
        const query = `SELECT * FROM student2 WHERE stud_id = ${data.id}`;
        const result = await pool.query(query);
        return result[0];
    }
    catch(err){
        console.log(err);
    }
}

module.exports = { studentAdd, studentAll, studentGet };