const managerAuthorizer = require('../../../../middlewares/manager.authorizer');
const controllers = require('../controllers/product.controllers');
const upload  = require('../../../../middlewares/upload');
const { verifyToken } = require('../../../../middlewares/token');

const productRoutes = (app) => {
    app.post('/products', verifyToken, controllers.productAll);
    app.get('/products/:id', verifyToken, controllers.productGet);
    app.post('/productsadd', verifyToken, managerAuthorizer, upload.array('prd_imgs', 10), controllers.productAdd);
    app.put('/products/:id', verifyToken, managerAuthorizer, upload.array('prd_imgs', 10), controllers.productUpdate);
    app.delete('/products/:id', verifyToken, managerAuthorizer, controllers.productDelete);
}

module.exports = productRoutes;