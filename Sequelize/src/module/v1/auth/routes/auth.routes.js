const authController = require('../controllers/auth.controllers');

const authRoutes = (app) => {
    app.post('/register', authController.register);
}

module.exports = authRoutes;