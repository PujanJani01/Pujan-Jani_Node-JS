let pool = require("../../../../db/db.con")

const getDoctorService = async(data) => {
    if (data.id) {
        const query = `SELECT * FROM doctor WHERE doc_id = ${data.id}`;
        const result = await pool.query(query);
        return result[0];
    }
    const query = `SELECT * FROM doctor`;
    const result = await pool.query(query);
    return result;
}

const postDoctorService = async(data) => {
    const fields = ['doc_name', 'doc_job_title', 'doc_phone'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO doctor(${fields.join()})
                   VALUES(${placeholders})`;
    await pool.query(query, [data.doc_name, data.doc_job_title, data.doc_phone]);
}

const putDoctorService = async (data) => {
    const query = `UPDATE doctor 
                   SET doc_name = ?, doc_job_title = ?, doc_phone = ?
                   WHERE doc_id = ?`;
    await pool.query(query, [data.doc_name, data.doc_job_title, data.doc_phone, data.id]);
}

const deleteDoctorService = async(data) => {

    const query = `DELETE FROM doctor WHERE doc_id = ${data.id}`;
    await pool.query(query);
    
}

module.exports = { getDoctorService, postDoctorService, deleteDoctorService, putDoctorService };