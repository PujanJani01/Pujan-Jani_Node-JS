let pool = require("../../../../db/db.con")
let moment = require("moment");

let pre_date = moment().format('DD-MM-YYYY HH:mm:ss');
let pre_created_at = Date.now();

const prescriptionAll = async () => {
    const query = `SELECT * FROM prescription`;
    const result = await pool.query(query);
    return result[0].map((item) => { return {...item, pre_medicine: JSON.parse(item.pre_medicine)}; });
}

const prescriptionGet = async (data) => {
        const query = `SELECT * FROM prescription WHERE pre_id = ?`;
        const result = await pool.query(query, [data.id]);
        return {...result[0][0], pre_medicine: JSON.parse(result[0][0].pre_medicine)};
}

const prescriptionAdd = async (data) => {
    const fields = ['pre_p_id', 'pre_doc_id', 'pre_date', 'pre_medicine', 'pre_created_at'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO prescription(${fields.join()})
                   VALUES(${placeholders})`;
    await pool.query(query, [data.pre_p_id, data.pre_doc_id, pre_date, String(data.pre_medicine), pre_created_at]);
}

const prescriptionDelete = async (data) => {
    const query = `DELETE FROM prescription WHERE pre_id = ?`;
    await pool.query(query, [data.id]);
}

module.exports = { prescriptionAll, prescriptionGet, prescriptionAdd, prescriptionDelete };