const orderServices = require('../services/order.services');
const { successResponse, errorResponse } = require('../../../../helpers/http_response');

const orderAll = async(req, res) => {
    try{
        let result = await orderServices.orderAll(req.user);
        if(!result) return errorResponse(res, "Data not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res,"Internal Server Error", 500);
    }
}

const orderGet = async(req, res) => {
    try{
        let result = await orderServices.orderGet({...req.params, ...req.user});
        if(result == 'NotFound') return errorResponse(res, "order not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

/* const orderDelete = async(req, res) => {
    try{
        let result = await orderServices.orderDelete(req.params);
        if(result == "NoTFound") return errorResponse(res, "order not found", 404);
        successResponse(res, undefined, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
} */


module.exports = { orderAll, orderGet, /* orderDelete */ };