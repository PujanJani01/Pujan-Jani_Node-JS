let pool = require("../../../../db/db.con");
const { errorResponse, successResponse } = require("../../../../helpers/http_response");
const { createToken } = require('../middlewares/auth/token.js');


const loginService = async(data) => {
    let query = `SELECT * FROM userconfig WHERE u_name = ? AND u_pass = ?`;
    let user = await pool.query(query, [data.u_name, data.u_pass]);
    if (!user) return errorResponse(res, "User not found", 404);
    let userData = { ...user[0][0] };
    delete userData.u_pass;
    delete userData.u_name;
    let encodedData = createToken(userData);
    return { ...userData, token: encodedData };
}

module.exports = { loginService };