const express = require('express');
require('../../db/db.con.js');
const authRoutes = require('../../module/v1/auth/routes/auth.routes.js');

module.exports = () => {
    const api = express.Router();
    authRoutes(api);

    return api;
}