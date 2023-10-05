let pool = require("../../../../db/db.con")

const getPaitentService = async(data) => {
    if (data.id) {
        const query = `SELECT * FROM patient WHERE p_id = ${data.id}`;
        const result = await pool.query(query);
        return result[0];
    }
    const query = `SELECT * FROM patient`;
    const result = await pool.query(query);
    return result[0];
}

const postPaitentService = async(data) => {
    const fields = ['p_name', 'p_age', 'p_phone'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO patient(${fields.join()})
                   VALUES(${placeholders})`;
    await pool.query(query, [data.p_name, data.p_age, data.p_phone]);
}

const deletePaitentService = async(data) => {
    const query = `DELETE FROM patient WHERE p_id = ${data.id}`;
        await pool.query(query);
}

module.exports = { getPaitentService, postPaitentService, deletePaitentService };