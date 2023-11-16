const sequelize = require('../db/db.con');
const { DataTypes } = require('sequelize');

const User = require('./user.model');

const Cart = sequelize.define('cart', {
    cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cart_fk_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: true });

Cart.belongsTo(User, { foreignKey: 'cart_fk_user_id' });

module.exports = Cart;