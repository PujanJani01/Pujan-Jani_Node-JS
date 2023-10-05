const mysql = require('mysql2/promise');
const dbConfig = require('../configs/db.config');
const pool = mysql.createPool(dbConfig);

pool.query('SELECT 1 + 1 AS val')
.then(res => console.log("Connection successful"))
.catch(err => console.log("Connection failed"));

module.exports = pool;