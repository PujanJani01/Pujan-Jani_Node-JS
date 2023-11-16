const orderServices = require('../services/order.services');
const { successResponse, errorResponse } = require('../../../../helpers/http-response');

const orderAll = async (req, res) => {
    try {
        const data = await orderServices.orderAll();
        successResponse({ res, message: 'Order list', data })
    } catch (err) {
        errorResponse(res,err)
    }
}

const orderAdd = async (req, res) => {
    try {
        await orderServices.orderAdd(req.body);
        successResponse({ res, message: 'Order added successfully' })
    } catch (err) {
        errorResponse(res,err)
    }
}

module.exports = { orderAdd, orderAll };