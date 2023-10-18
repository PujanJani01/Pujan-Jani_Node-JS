const managerAuthorizer = require('../../../../middlewares/manager.authorizer');
const { verifyToken } = require('../../../../middlewares/token');
const controller = require('../controllers/order.controllers');

const orderRouter = async(app) => {
    app.get('/orders', verifyToken, controller.orderAll);
    app.get('/orders/:oid', verifyToken, controller.orderGet);
    // app.delete('/orders/:id', managerAuthorizer, controller.cartDelete);
}

module.exports = orderRouter;