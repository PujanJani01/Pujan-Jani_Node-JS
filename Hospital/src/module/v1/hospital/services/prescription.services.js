let pool = require("../../../../db/db.con")
let moment = require("moment");

let pre_date = moment().format('DD-MM-YYYY HH:mm:ss');
let pre_created_at = Date.now();

const getPrescriptionService = async (data) => {
    if (data.id) {
        const query = `SELECT * FROM prescription WHERE pre_id = ${data.id}`;
        const result = await pool.query(query);
        return result[0];
    }
    const query = `SELECT * FROM prescription`;
    const result = await pool.query(query);
    return result[0];
}

const postPrescriptionService = async (data) => {
    const fields = ['pre_p_id', 'pre_doc_id', 'pre_date', 'pre_medicine', 'pre_created_at'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO prescription(${fields.join()})
                   VALUES(${placeholders})`;
    await pool.query(query, [data.pre_p_id, data.pre_doc_id, pre_date, data.pre_medicine, pre_created_at]);
}

/* const putPrescriptionService = async (data) => {
    const query = `UPDATE prescription 
                   SET pre_p_id = ?, pre_doc_id = ?, pre_medicine = ?, pre_date = ?, pre_created_at = ? 
                   WHERE pre_id = ?`;
    await pool.query(query, [data.pre_p_id, data.pre_doc_id, data.pre_medicine, pre_date,  pre_created_at, data.id]);
} */

const deletePrescriptionService = async (data) => {
    const query = `DELETE FROM prescription WHERE pre_id = ${data.id}`;
    await pool.query(query);
}

module.exports = { getPrescriptionService, postPrescriptionService, deletePrescriptionService, /* putPrescriptionService */ };