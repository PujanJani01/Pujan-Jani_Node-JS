
const register = require('../controllers/register.controllers');
const connect = require('../../../../db/db.con');
const validator = require('../../../../middlewares/validator');
const joi = require('joi');

const schema = joi.object({
    user_first_name: joi.string().required(),
    user_last_name: joi.string().required(),
    user_gender: joi.string(),
    user_email: joi.string().email().required(),
    user_pass: joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{6,10}$/).required(),
    user_phone: joi.string().length(10).pattern(/^[0-9]+$/).required(),
});

const registerRoutes = async (app) => {
    await connect();
    app.post('/register', validator(schema), register);
}
module.exports = registerRoutes;