const managerAuthorizer = require('../../../../middlewares/manager.authorizer');
const { verifyToken } = require('../../../../middlewares/token');
const controller = require('../controllers/category.controllers');

const categoryRouter = async(app) => {
    app.get('/category', verifyToken, managerAuthorizer, controller.categoryAll);
    app.get('/category/:id', verifyToken, managerAuthorizer, controller.categoryGet);
    app.post('/category', verifyToken, managerAuthorizer, controller.categoryAdd);
    app.put('/category/:id', verifyToken, managerAuthorizer, controller.categoryUpdate);
    app.delete('/category/:id', verifyToken, managerAuthorizer, controller.categoryDelete);
}

module.exports = categoryRouter;