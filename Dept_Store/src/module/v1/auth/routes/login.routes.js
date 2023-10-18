const login = require('../controllers/login.controllers');

const loginRoutes = (app) => {
    app.post('/login', login);
}
module.exports = loginRoutes;