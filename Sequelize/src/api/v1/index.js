const express = require('express');
require('../../db/db.con.js');
const authRoutes = require('../../module/v1/auth/routes/auth.routes.js');
const productRoutes = require('../../module/v1/product/routes/product.routes.js');
const cartRoutes = require('../../module/v1/cart/routes/cart.routes.js');
const ordersRoutes = require('../../module/v1/order/routes/order.routes.js');

module.exports = () => {
    const api = express.Router();

    authRoutes(api);
    productRoutes(api);
    cartRoutes(api);
    ordersRoutes(api);

    return api;
}