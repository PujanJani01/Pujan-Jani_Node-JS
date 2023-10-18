const { hashPassword } = require('../../../../common/encrypt');
let user = require('../../../../models/user.model');

const userAll = async() => {
    try{
        let result = await user.find({});
        return result;
    }catch(err){
        console.log(err);
    }
}

const userGet = async(data) => {
    try{
        let result = await user.findById(data.id);
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