const orderControllers = require('../controllers/order.controllers');
const { verifyToken } = require('../../../../middlewares/jwt-token');
const roleValidator = require('../../../../middlewares/role-validator');
const timeValidatior = require('../../../../middlewares/time-validatior');

const ordersRoutes = (app) => {

    app.get('/order', verifyToken, roleValidator(['admin']), orderControllers.orderAll);

    app.post('/order', verifyToken,  roleValidator(['user']), orderControllers.orderAdd);
}

module.exports = ordersRoutes;