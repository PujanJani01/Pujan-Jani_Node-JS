const sequelize = require('../db/db.con');
const { DataTypes } = require('sequelize');

const Order = require('./order.model');
const Product = require('./product.model');

const Order_items = sequelize.define('order_items', {
    orderitm_fk_order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderitm_fk_prd_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    orderitm_prd_qty: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: false });

Order_items.belongsTo(Order, { foreignKey: 'orderitm_fk_order_id', as: 'order' });
Order_items.belongsTo(Product, { foreignKey: 'orderitm_fk_prd_id', as: 'product' });



module.exports = Order_items;

