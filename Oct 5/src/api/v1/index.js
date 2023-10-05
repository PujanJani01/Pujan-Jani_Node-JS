const express = require('express');
const studRoutes = require('../../module/v1/student/router/student.router');

module.exports = () => {
   const api = express.Router();
   studRoutes(api);
   return api;
}
