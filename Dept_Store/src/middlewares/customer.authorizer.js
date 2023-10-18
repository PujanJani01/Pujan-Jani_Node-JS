const { errorResponse } = require('../helpers/http_response')

const customerAuthorizer = (req, res, next) => {
    if (req.user.role !== 'customer') {
        return errorResponse(res, 'Not authorized', 403)
    }
    next();
}

module.exports = customerAuthorizer;