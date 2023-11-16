const controllers = require('../controllers/cart.controllers');
const { verifyToken } = require('../../../../middlewares/jwt-token');
const roleValidator = require('../../../../middlewares/role-validator');

const cartRoutes = (app) => {

    app.get('/cart', verifyToken, roleValidator(['user']), controllers.cartGet);

    app.post('/cart', verifyToken, roleValidator(['user']), controllers.cartAdd);

    app.delete('/cart', verifyToken, roleValidator(['user']), controllers.cartDelete);
}

module.exports = cartRoutes;