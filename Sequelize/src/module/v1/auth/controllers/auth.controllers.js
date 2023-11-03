const authServices = require('../services/auth.services.js');
const { successResponse, errorResponse } = require('../../../../helpers/http-response.js');

const register = async (req, res) => {
    try {
        const result = await authServices.register(req.body);
        successResponse({ res, message: 'User registered successfully', data: result.userData, token: result.encodedData });
    } catch (err) {
        errorResponse(res, err);
    }
}

module.exports = { register };