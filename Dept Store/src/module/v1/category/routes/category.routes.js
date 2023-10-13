const managerAuthorizer = require('../../../../middlewares/manager.authorizer');
const controller = require('../controllers/category.controllers');

const categoryRouter = async(app) => {
    app.get('/category', managerAuthorizer, controller.categoryAll);
    app.get('/category/:id',managerAuthorizer, controller.categoryGet);
    app.post('/category',managerAuthorizer, controller.categoryAdd);
    app.put('/category/:id',managerAuthorizer, controller.categoryUpdate);
    app.delete('/category/:id',managerAuthorizer, controller.categoryDelete);
}

module.exports = categoryRouter;