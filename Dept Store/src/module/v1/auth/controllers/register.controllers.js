const regServices = require('../services/register.services');
const { successResponse, errorResponse } = require('../../../../helpers/http_response');

const register = async (req, res) => {
    try{
       if(!req.body.user_first_name || 
          !req.body.user_email || 
          !req.body.user_pass || 
          !req.body.user_phone
        ) return errorResponse(res, 'Please fill all the fields', 400);
       const data = Object.assign({}, req.body);
       let result = await regServices.register(data);
       if(result === 'User already exists') return errorResponse(res, 'User already exists', 409);
       successResponse(res, undefined ,'User registered successfully');
    }catch(err){
        console.log(err);    
        errorResponse(res, 500 , 'Internal server error');
    }
}

module.exports = register;