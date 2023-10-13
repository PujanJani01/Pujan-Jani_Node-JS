const managerAuthorizer = require('../../../../middlewares/manager.authorizer');
const controllers = require('../controllers/product.controllers');

const productRoutes = (app) => {
    app.get('/products', controllers.productAll);
    app.get('/products/:id', controllers.productGet);
    app.post('/products', managerAuthorizer,controllers.productAdd);
    app.put('/products/:id', managerAuthorizer, controllers.productUpdate);
    app.delete('/products/:id', managerAuthorizer, controllers.productDelete);
}

module.exports = productRoutes;