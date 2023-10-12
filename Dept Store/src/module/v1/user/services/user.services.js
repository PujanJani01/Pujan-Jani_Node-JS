let user = require('../../../../models/userSchema.model');

const userAll = async(data) => {
    try{
        let result = await user.find({});
        // return result.map((item) => ({...item._doc, user_pass: '**********'}));
        return result;
    }catch(err){
        console.log(err);
    }
}

const userGet = async(data) => {
    try{
        let result = await user.findById(data.id);
        // return {...result._doc, user_pass: '**********'};
        return result;
    }catch(err){
        if(err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

const userUpdate = async(data) => {
    try{
       let us = await user.findById(data.id);
       if(!us) return "NoTFound";
       await user.findOneAndUpdate({_id: data.id}, data);
    }catch(err){
        if(err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

module.exports = { userAll, userGet, userUpdate };