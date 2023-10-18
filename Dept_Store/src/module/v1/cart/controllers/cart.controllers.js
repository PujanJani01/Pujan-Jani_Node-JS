const cartServices = require('../services/cart.services');
const { successResponse, errorResponse } = require('../../../../helpers/http_response');

const cartAll = async(req, res) => {
    try{
        let result = await cartServices.cartAll(req.user);
        if(!result) return errorResponse(res, "Data not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res,"Internal Server Error", 500);
    }
}

const cartGet = async(req, res) => {
    try{
        let result = await cartServices.cartGet(req.params);
        if(!result) return errorResponse(res, "Cart not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}


const cartCheck = async(req, res) => {
    try{
        let result = null;
        if(req.body.isCheck == true) result = await cartServices.cartCheck(req.params);
        if(result == "NoTFound") return errorResponse(res, "Cart not found", 404);
        successResponse(res, undefined, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const cartDelete = async(req, res) => {
    try{
        let result = await cartServices.cartDelete(req.params);
        if(result == "NoTFound") return errorResponse(res, "cart not found", 404);
        successResponse(res, undefined, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}


module.exports = { cartAll, cartGet, cartDelete, cartCheck };