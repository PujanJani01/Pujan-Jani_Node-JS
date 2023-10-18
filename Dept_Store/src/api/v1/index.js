const express = require('express');
const regRoutes = require('../../module/v1/auth/routes/register.routes');
const loginRoutes = require('../../module/v1/auth/routes/login.routes');
const userRoutes = require('../../module/v1/user/routes/user.routes');
const productRoutes = require('../../module/v1/product/routes/product.routes');
const categoryRouter = require('../../module/v1/category/routes/category.routes');
const cartRoutes = require('../../module/v1/cart/routes/cart.routes');
const userprofileRoutes = require('../../module/v1/userDesk/routes/userprofile.routes');
const usercartRoutes = require('../../module/v1/userDesk/routes/usercart.routes');
const orderRoutes = require('../../module/v1/order/routes/order.routes');

module.exports = () => {
   const api = express.Router();
   regRoutes(api);
   loginRoutes(api);
   userRoutes(api);
   categoryRouter(api);
   productRoutes(api);
   cartRoutes(api);
   orderRoutes(api);
   userprofileRoutes(api);
   usercartRoutes(api);
   return api;
}

