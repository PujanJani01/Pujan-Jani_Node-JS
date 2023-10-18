let category = require('../../../../models/category.model');

const categoryAll = async() => {
    try{
        let result = await category.find({});
        console.log(result);
        return result;
    }catch(err){
        console.log(err);
    }
}

const categoryGet = async(data) => {
    try{
        let result = await category.findById(data.id);
        return result;
    }catch(err){
        if(err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

const categoryAdd = async(data) => {
    try{
        let ctg = await category.findOne({ctg_name: {$regex: data.ctg_name, $options: 'i'}});
        if(ctg) return null;
        return await category.create(data);
    }catch(err){
        console.log(err);
    }
}

const categoryUpdate = async(data) => {
    try{
       let us = await category.findById(data.id);
       if(!us) return "NoTFound";
       await category.findOneAndUpdate({_id: data.id}, data);
    }catch(err){
        if(err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

const categoryDelete = async(data) => {
    try{
        let us = await category.findById(data.id);
        if(!us) return "NoTFound";
        await category.findOneAndDelete({_id: data.id});
    }catch(err){
        if(err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

module.exports = { categoryAll, categoryGet, categoryAdd, categoryUpdate, categoryDelete };