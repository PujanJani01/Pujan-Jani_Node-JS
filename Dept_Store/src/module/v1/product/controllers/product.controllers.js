const productServices = require('../services/product.services');
const { successResponse, errorResponse } = require('../../../../helpers/http_response');

const productAll = async(req, res) => {
    try{
        let result = null;
        if(req.query.category) result = await productServices.productGetByCategory({...req.user, ...req.query, ...req.body});
        else if(req.query.prdname) result = await productServices.productGetByName({...req.user, ...req.query, ...req.body});
        else if(req.query.minprice && req.query.maxprice) result = await productServices.productGetByPrice({...req.user, ...req.query, ...req.body});
        else result = await productServices.productAll({...req.user, ...req.body});
        if(result == "NotFound") return errorResponse(res, "Data not found", 404);
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
        if(result = "NotFound") return errorResponse(res, "product not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const productAdd = async(req, res) => {
    try{
        let result = await productServices.productAdd(req.body);
        if(result == "AlreadyExists") return errorResponse(res, "product already exist", 409);
        successResponse(res, result, "product Added Successfully");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const productUpdate = async(req, res) => {
    try{
        let result = await productServices.productUpdate({...req.body,...req.params});
        if(result == "NotFound") return errorResponse(res, "product not found", 404);
        successResponse(res, result, "Updated Successfully");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const productDelete = async(req, res) => {
    try{
        let result = await productServices.productDelete(req.params);
        if(result == "NotFound") return errorResponse(res, "product not found", 404);
        successResponse(res, result, "Set to not visible");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

module.exports = { productAll, productGet, productAdd, productUpdate, productDelete };