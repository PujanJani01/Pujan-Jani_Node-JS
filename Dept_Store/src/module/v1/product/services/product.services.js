const { default: mongoose } = require('mongoose');
let product = require('../../../../models/product.model');
let productview = require('../../../../common/productview');

const productAll = async (data) => {
    try {
        let result = null;
        let totalpage = null;
        let currentpage = null;
        if (data.role === 'manager'){
            result = await product.find().skip(data.offset).limit(data.limit);
            totalpage = Math.ceil(await product.find().count()/data.limit);
            currentpage = Math.ceil(data.offset/data.limit);
        } 
        else{
            result = await product.find({ prd_is_visible: true }).skip(data.offset).limit(data.limit);
            totalpage = Math.ceil(await product.find({ prd_is_visible: true }).count()/data.limit);
            currentpage = Math.ceil(data.offset/data.limit);
        } 
        if (result.length == 0) return null;
        result = await productview(result, data);
        return { result, totalpage, currentpage: currentpage+1 };
    } catch (err) {
        console.log(err);
    }
}

const productGet = async (data) => {
    try {
        let result = null;
        if (data.role === 'manager') result = await product.findById(data.prd_id);
        else result = await product.findOne({ _id: data.prd_id, prd_is_visible: true });
        if (!result) return "NotFound";
        result._doc.prd_mfg_date = result.prd_mfg_date.toLocaleDateString();
        result._doc.prd_exp_date = result.prd_exp_date.toLocaleDateString();
        result._doc.prd_buy_date = result.prd_buy_date.toLocaleDateString();
        if (data.role != 'manager') {
            result._doc.prd_is_visible = undefined;
            result._doc.prd_min_qty = undefined;
            result._doc.prd_buy_date = undefined;
        }
        result._doc.prd_ctg = await category.findById(result.prd_ctg_id).select('ctg_name');
        delete result._doc.prd_ctg_id;
        result._doc.prd_imgs = result.prd_imgs.map(img => `http://localhost:${process.env.PORT}/${process.env.UPLOAD_DIR.split('/')[2]}/${img}`);
        return result;
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

const productGetByCategory = async (data) => {
    try {
        let result = null;
        let totalpage = null;
        let currentpage = null;
        let ctgid = new mongoose.Types.ObjectId(data.category);
        if (data.role == 'manager'){
            result = await product.find({ prd_ctg_id: ctgid }).skip(data.offset).limit(data.limit);
            totalpage = Math.ceil(await product.find({ prd_ctg_id: ctgid }).count()/data.limit);
            currentpage = Math.ceil(data.offset/data.limit);
        } 
        else{
            result = await product.find({ prd_ctg_id: ctgid, prd_is_visible: true }).skip(data.offset).limit(data.limit);
            totalpage = Math.ceil(await product.find({ prd_ctg_id: ctgid, prd_is_visible: true }).count()/data.limit);
            currentpage = Math.ceil(data.offset/data.limit);
        } 
        if (result.length == 0) return "NotFound";
        result = await productview(result, data);
        return { result, totalpage, currentpage: currentpage+1 };
    } catch (err) {
        console.log(err);
    }
}

const productGetByName = async (data) => {
    try {
        let result = null;
        let totalpage = null;
        let currentpage = null;
        let prdname = new RegExp(data.prdname, 'i');
        if (data.role == 'manager'){
            result = await product.find({ prd_name: prdname }).skip(data.offset).limit(data.limit);
            totalpage = Math.ceil(await product.find({ prd_name: prdname }).count()/data.limit);
            currentpage = Math.ceil(data.offset/data.limit);
        } 
        else{
            result = await product.find({ prd_name: prdname, prd_is_visible: true }).skip(data.offset).limit(data.limit);
            totalpage = Math.ceil(await product.find({ prd_name: prdname, prd_is_visible: true }).count()/data.limit);
            currentpage = Math.ceil(data.offset/data.limit);
        } 
        if (result.length == 0) return "NotFound";
        result = await productview(result, data);
        return { result, totalpage, currentpage: currentpage+1 };
    } catch (err) {
        console.log(err);
    }
}

const productGetByPrice = async (data) => {
    try {
        let result = null;
        let totalpage = null;
        let currentpage = null;
        if (data.role == 'manager'){
            result = await product.find({ prd_price: { $gte: data.min, $lte: data.max } }).skip(data.offset).limit(data.limit);
            totalpage = Math.ceil(await product.find({ prd_price: { $gte: data.min, $lte: data.max } }).count()/data.limit);
            currentpage = Math.ceil(data.offset/data.limit);
        } 
        else{
            result = await product.find({ prd_price: { $gte: 'Rs.'+data.minprice, $lte: 'Rs.'+data.maxprice }, prd_is_visible: true }).skip(data.offset).limit(data.limit);
            totalpage = Math.ceil(await product.find({ prd_price: { $gte: 'Rs.'+data.minprice, $lte: 'Rs.'+data.maxprice }, prd_is_visible: true }).count()/data.limit);
            currentpage = Math.ceil(data.offset/data.limit);
        } 
        if (result.length == 0) return "NotFound";
        result = await productview(result, data);
        return { result, totalpage , currentpage: currentpage+1 };
    } catch (err) {
        console.log(err);
    }
}


const productAdd = async (data) => {
    try {
        let prd = await product.findOne({ prd_name: { $regex: data.prd_name, $options: 'i' } });
        if (prd) return "AlreadyExists";
        console.log(data);
        await product.create(data);
    } catch (err) {
        console.log(err);
    }
}

const productUpdate = async (data) => {
    try {
        let prd = await product.findById(data.id);
        if (!prd) return "NotFound";
        prd.prd_imgs.push(data.prd_imgs);
        await product.findOneAndUpdate({ _id: data.id }, { ...data, prd_imgs: prd.prd_imgs });
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

const productDelete = async (data) => {
    try {
        let prd = await product.findById(data.id);
        if (!prd) return "NotFound";
        await product.findOneAndUpdate({ prd_is_visible: false });
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

module.exports = { productAll, productGet, productAdd, productUpdate, productDelete,
                   productGetByCategory, productGetByName, productGetByPrice };