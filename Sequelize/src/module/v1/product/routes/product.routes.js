const { productGet, productAdd, productUpdate, productDelete } = require('../controllers/product.controllers');
const { verifyToken } = require('../../../../middlewares/jwt-token');
const roleValidator = require('../../../../middlewares/role-validator');

const productRoutes = async (app) => {

    app.post('/product/pagging', verifyToken, productGet);

    app.post('/product', verifyToken, roleValidator(['admin']), productAdd);

    app.put('/product', verifyToken, roleValidator(['admin']), productUpdate);

    app.delete('/product', verifyToken, roleValidator(['admin']), productDelete);
}

module.exports = productRoutes;