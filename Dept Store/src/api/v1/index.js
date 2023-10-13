const express = require('express');
// const regRoutes = require('../../module/v1/auth/routes/register.routes');
// const loginRoutes = require('../../module/v1/auth/routes/login.routes');
const userRoutes = require('../../module/v1/user/routes/user.routes');
const userDeskRoutes = require('../../module/v1/userDesk/routes/myprofile.routes');
const productRoutes = require('../../module/v1/product/routes/product.routes');
const categoryRouter = require('../../module/v1/category/routes/category.routes');

module.exports = () => {
   const api = express.Router();
   // regRoutes(api);
   // loginRoutes(api);
   userRoutes(api);
   userDeskRoutes(api);
   categoryRouter(api);
   productRoutes(api);
   return api;
}

