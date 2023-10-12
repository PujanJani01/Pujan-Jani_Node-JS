
const register = require('../controllers/register.controllers');
const connect = require('../../../../db/db.con');

const registerRoutes = async (app) => {
    await connect();
    app.post('/register', register);
}
module.exports = registerRoutes;