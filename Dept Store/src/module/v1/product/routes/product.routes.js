const controllers = require('../controllers/product.controller');

const productRoutes = (app) => {
    app.get('/products', controllers.productAll);
    app.get('/products/:id', controllers.productGet);
    app.post('/products', controllers.productAdd);
    app.put('/products/:id', controllers.productUpdate);
    app.delete('/products/:id', controllers.productDelete);
}

module.exports = productRoutes;