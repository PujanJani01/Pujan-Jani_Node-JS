const { errorResponse } = require('../helpers/http_response')

const managerAuthorizer = (req, res, next) => {
    if (req.user.role !== 'manager') {
        return errorResponse(res, 'Not authorized', 403)
    }
    next();
}

module.exports = managerAuthorizer;