const userController = require('../controllers/user.controllers');
const managerAuthorizer = require('../../../../middlewares/manager.authorizer');
// const { verifyToken } = require('../../../../middlewares/token');
const connect = require('../../../../db/db.con');
const userRoutes = async(app) => {
    await connect();
    app.get('/users', managerAuthorizer, userController.userAll);
    app.get('/users/:id', managerAuthorizer, userController.userGet);
    app.put('/users/:id', managerAuthorizer, userController.userUpdate);
}

module.exports = userRoutes;