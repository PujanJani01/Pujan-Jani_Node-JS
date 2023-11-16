const sequelize = require('../db/db.con');
const { DataTypes } = require('sequelize');

const Timer = sequelize.define('timer', {
    start_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end_time: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });


module.exports = Timer;