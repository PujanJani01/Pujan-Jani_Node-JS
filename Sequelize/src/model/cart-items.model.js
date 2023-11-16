const sequelize = require('../db/db.con');
const { DataTypes } = require('sequelize');

const Cart = require('./cart.model');

const Cart_itmes = sequelize.define('cart_items', {
    cartitm_fk_cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cartitm_fk_prd_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cartitm_prd_qty: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {timestamps: false});

Cart_itmes.belongsTo(Cart, { foreignKey: 'cartitm_fk_cart_id' });

module.exports = Cart_itmes;