const categoryServices = require('../services/category.services');
const { successResponse, errorResponse } = require('../../../../helpers/http_response');

const categoryAll = async(req, res) => {
    try{
        let result = await categoryServices.categoryAll();
        if(!result) return errorResponse(res, "Data not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res,"Internal Server Error", 500);
    }
}

const categoryGet = async(req, res) => {
    try{
        let result = await categoryServices.categoryGet(req.params);
        if(!result) return errorResponse(res, "category not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const categoryAdd = async(req, res) => {
    try{
        let result = await categoryServices.categoryAdd(req.body);
        if(result == null) return errorResponse(res, "category already exist", 409);
        successResponse(res, result, "Category Added Successfully");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const categoryUpdate = async(req, res) => {
    try{
        let result = await categoryServices.categoryUpdate({...req.body,...req.params});
        console.log(result);
        if(result == "NoTFound") return errorResponse(res, "category not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}

const categoryDelete = async(req, res) => {
    try{
        let result = await categoryServices.categoryDelete(req.params);
        if(result == "NoTFound") return errorResponse(res, "category not found", 404);
        successResponse(res, result, "Success");
    }catch(err){
        console.log(err);
        errorResponse(res, "Internal Server Error", 500);
    }
}


module.exports = { categoryAll, categoryGet,categoryAdd, categoryUpdate, categoryDelete };