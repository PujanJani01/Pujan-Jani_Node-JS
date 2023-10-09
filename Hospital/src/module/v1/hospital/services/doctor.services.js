let pool = require("../../../../db/db.con")

const doctorAll = async () => {
    const query = `SELECT * FROM doctor`;
    const result = await pool.query(query);
    return result;
}
const doctorGet = async (data) => {
    const query = `SELECT * FROM doctor WHERE doc_id = ?`;
    const result = await pool.query(query, [data.id]);
    return result[0];
}

const doctorAdd = async (data) => {
    const fields = ['doc_name', 'doc_job_title', 'doc_phone'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO doctor(${fields.join()})
                   VALUES(${placeholders})`;
    await pool.query(query, [data.doc_name, data.doc_job_title, data.doc_phone]);
}

const doctorUpdate = async (data) => {
    const query = `UPDATE doctor 
                   SET doc_name = ?, doc_job_title = ?, doc_phone = ?
                   WHERE doc_id = ?`;
    await pool.query(query, [data.doc_name, data.doc_job_title, data.doc_phone, data.id]);
}

const doctorDelete = async (data) => {
    const query = `DELETE FROM doctor WHERE doc_id = ?`;
    await pool.query(query, [data.id]);
}

module.exports = { doctorAll, doctorGet, doctorAdd, doctorUpdate, doctorDelete };