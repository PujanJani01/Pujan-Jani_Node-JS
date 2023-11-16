const sequelize = require('../db/db.con');
const { DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
    prd_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    prd_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prd_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prd_img: {
        type: DataTypes.STRING,
    },
    prd_is_visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { timestamps: true });

module.exports = Product;
