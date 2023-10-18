const regServices = require('../services/register.services');
const { successResponse, errorResponse } = require('../../../../helpers/http_response');

const register = async (req, res) => {
    try{
       const data = Object.assign({}, req.body);
       let result = await regServices.register(data );
       if(result === 'User already exists') return errorResponse(res, 'User already exists', 409);
       successResponse(res, undefined ,'User registered successfully');
    }catch(err){
        console.log(err);   
        if(err.isJoi === true) return errorResponse(res, err.message, 400); 
        errorResponse(res, 'Internal server error', 500);
    }
}

module.exports = register;