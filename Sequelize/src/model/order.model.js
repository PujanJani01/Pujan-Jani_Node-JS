const sequelize = require('../db/db.con');
const { DataTypes } = require('sequelize');

const User = require('./user.model');

const Order = sequelize.define('order', {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_fk_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: true });

Order.belongsTo(User, { foreignKey: 'order_fk_user_id', as: 'user' });

module.exports = Order;