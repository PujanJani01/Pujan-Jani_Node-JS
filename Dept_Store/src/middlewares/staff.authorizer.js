const { errorResponse } = require('../helpers/http_response')

const staffAuthorizer = (req, res, next) => {
    if (req.user.role !== 'staff') {
        return errorResponse(res, 'Not authorized', 403)
    }
    next();
}

module.exports = staffAuthorizer;