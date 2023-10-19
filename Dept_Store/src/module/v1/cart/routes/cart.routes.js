const controller = require('../controllers/cart.controllers');
const {verifyToken} = require('../../../../middlewares/token');
const customerAuthorizer = require('../../../../middlewares/customer.authorizer');
const staffAuthorizer = require('../../../../middlewares/staff.authorizer');

const cartRouter = async(app) => {
    app.get('/carts', verifyToken, controller.cartAll);
    app.get('/carts/:cid',verifyToken, staffAuthorizer, controller.cartGet);
    app.post('/carts',verifyToken, customerAuthorizer, controller.cartAdd);
    app.post('/carts/:cid',verifyToken, staffAuthorizer, controller.cartCheck);
    app.put('/carts/',verifyToken, customerAuthorizer, controller.cartUpdate);
    app.delete('/carts',verifyToken,customerAuthorizer, controller.cartDelete);
}

module.exports = cartRouter;