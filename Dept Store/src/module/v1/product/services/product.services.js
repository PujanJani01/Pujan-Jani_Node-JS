let product = require('../../../../models/product.model');
let productImg = require('../../../../models/productImage.model');

const productAll = async (data) => {
    try {
        let result = null;
        if (data.role === 'manager') result = await product.find()
        else result = await product.find({ prd_is_visible: true });
        if (!result) return null;
        return result.map(prd => {
            return { ...prd._doc, prd_mfg_date: prd.prd_mfg_date.toLocaleDateString(), prd_exp_date: prd.prd_exp_date.toLocaleDateString(), prd_buy_date: prd.prd_buy_date.toLocaleDateString() }
        });
    } catch (err) {
        console.log(err);
    }
}

const productGet = async (data) => {
    try {
        let result = null;
        console.log(data);
        if (data.role === 'manager') result = await product.findById(data.prd_id);
        else result = await product.findOne({ _id: data.prd_id, prd_is_visible: true });
        if (!result) return null;
        return { ...result._doc, prd_mfg_date: result.prd_mfg_date.toLocaleDateString(), prd_exp_date: result.prd_exp_date.toLocaleDateString(), prd_buy_date: result.prd_buy_date.toLocaleDateString() };
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

const productAdd = async (data) => {
    try {
        let prd = await product.findOne({ prd_name: {$regex: data.prd_name, $options: 'i'}});
        console.log(prd);
        if (prd) return null;
        let imgs = [...data.prd_imgs];
        delete data.prd_imgs;
        await product.create(data);
        let prd2 = await product.findOne({ prd_name: data.prd_name });
        let prdImgs = imgs.map(prdImg => ({prdimg_id: prd2._id, prdimg_img: prdImg}));
        console.log(prdImgs);
        return await productImg.insertMany(prdImgs);
    } catch (err) {
        console.log(err);
    }
}

const productUpdate = async (data) => {
    try {
        let prd = await product.findById(data.id);
        if (!prd) return "NoTFound";
        await product.findOneAndUpdate({ _id: data.id }, data);
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

const productDelete = async (data) => {
    try {
        let prd = await product.findById(data.id);
        if (!prd) return "NoTFound";
        await product.findOneAndUpdate({ prd_is_visible: false });
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

module.exports = { productAll, productGet, productAdd, productUpdate, productDelete };