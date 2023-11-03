require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    logging: false
};

module.exports = dbConfig;