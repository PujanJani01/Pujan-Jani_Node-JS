const staffAuthorizer = require('../../../../middlewares/staff.authorizer');
const controller = require('../controllers/cart.controllers');
const {verifyToken} = require('../../../../middlewares/token');

const cartRouter = async(app) => {
    app.get('/carts', verifyToken, controller.cartAll);
    app.get('/carts/:cid',verifyToken, staffAuthorizer, controller.cartGet);
    app.post('/carts/:cid',verifyToken, staffAuthorizer, controller.cartCheck);
    app.delete('/carts/:cid',verifyToken, controller.cartDelete);
}

module.exports = cartRouter;