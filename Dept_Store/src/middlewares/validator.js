const { errorResponse } = require('../helpers/http_response');

const validator = (schema) => {
   return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if(error) return errorResponse(res, error.message, 400);
        next();
    }
};

module.exports = validator;