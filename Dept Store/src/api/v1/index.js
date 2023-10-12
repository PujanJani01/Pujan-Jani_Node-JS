const express = require('express');
const regRoutes = require('../../module/v1/auth/routes/register.routes');
const loginRoutes = require('../../module/v1/auth/routes/login.routes');
const userRoutes = require('../../module/v1/user/routes/user.routes');
const userDeskRoutes = require('../../module/v1/userDesk/routes/myprofile.routes');

module.exports = () => {
   const api = express.Router();
   // regRoutes(api);
   // loginRoutes(api);
   userRoutes(api);
   userDeskRoutes(api);
   return api;
}

