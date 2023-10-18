const userController = require('../controllers/user.controllers');
const managerAuthorizer = require('../../../../middlewares/manager.authorizer');
// const { verifyToken } = require('../../../../middlewares/token');
const connect = require('../../../../db/db.con');
const { verifyToken } = require('../../../../middlewares/token');
const userRoutes = async(app) => {
    await connect();
    app.get('/users', verifyToken, managerAuthorizer, userController.userAll);
    app.get('/users/:id', verifyToken, managerAuthorizer, userController.userGet);
    app.put('/users/:id', verifyToken, managerAuthorizer, userController.userUpdate);
}

module.exports = userRoutes;