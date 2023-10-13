const productServices = require('../services/product.services');
const { successResponse, errorResponse } = require('../../../../helpers/http_response');

const productAll = async(req, res) => {
    try{
        let result = await productServices.productAll(req.user);
        if(!result) return errorResponse(res, "Data not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res,"Internal Server Error", 500);
    }
}

const productGet = async(req, res) => {
    try{
        let data = { prd_id: req.params.id, ...req.params, ...req.user};
        let result = await productServices.productGet(data);
        if(!result) return errorResponse(res, "product not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const productAdd = async(req, res) => {
    try{
        let result = await productServices.productAdd(req.body);
        if(result == null) return errorResponse(res, "product already exist", 409);
        successResponse(res, result, "product Added Successfully");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const productUpdate = async(req, res) => {
    try{
        let result = await productServices.productUpdate({...req.body,...req.params});
        console.log(result);
        if(result == "NoTFound") return errorResponse(res, "product not found", 404);
        successResponse(res, result, "Updated Successfully");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const productDelete = async(req, res) => {
    try{
        let result = await productServices.productDelete(req.params);
        if(result == "NoTFound") return errorResponse(res, "product not found", 404);
        successResponse(res, result, "Set to not visible");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

module.exports = { productAll, productGet, productAdd, productUpdate, productDelete };