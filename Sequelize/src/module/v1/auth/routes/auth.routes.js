const authController = require('../controllers/auth.controllers');

const authRoutes = (app) => {
    app.post('/register', authController.register);

    app.post('/login', authController.login);
}

module.exports = authRoutes;