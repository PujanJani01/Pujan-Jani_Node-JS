let orders = require('../../../../models/order.model');
let product = require('../../../../models/product.model');
let category = require('../../../../models/category.model');
require('dotenv').config();

const orderAll = async (data) => {
    try {
        let result = null;
        if(data.role == 'customer') result = await orders.find({order_user_id: data.id}).limit(10)
        else result = await orders.find();
        if (!result) return null;
        for (let i = 0; i < result.length; i++) {
            let orderitms = result[i].order_items;
            for (let j = 0; j < orderitms.length; j++) {
                let prd = await product.findById(orderitms[j].prd_id).select('prd_name prd_price prd_imgs prd_ctg_id prd_mfg_date prd_exp_date prd_desc prd_company');
                orderitms[j] = { orderitm_qty: orderitms[j].prd_qty, ...prd._doc };   
                orderitms[j].prd_ctg = await category.findById( orderitms[j].prd_ctg_id).select('ctg_name');
                orderitms[j].prd_ctg_id = undefined;
                orderitms[j].prd_mfg_date =  orderitms[j].prd_mfg_date.toLocaleDateString();
                orderitms[j].prd_exp_date =  orderitms[j].prd_exp_date.toLocaleDateString();
                orderitms[j].prd_imgs =  orderitms[j].prd_imgs.map(img => `http://localhost:${process.env.PORT}/${process.env.UPLOAD_DIR.split('/')[2]}/${img}`);
            }
            result[i] = { ...result[i]._doc, order_items: orderitms };
        }
        return result;
    } catch (err) {
        console.log(err);
    }
}

const orderGet = async (data) => {
    try {
        let result = null; 
        if(data.role == 'customer') result = await orders.findOne({order_user_id: data.id, _id: data.oid})
        else result = await orders.findById(data.id);
        if (!result) return 'NotFound';
        let orderitms = result.order_items;
        for(let i = 0; i < orderitms.length; i++) {
            let prd = await product.findById(result.order_items[i].prd_id).select('prd_name prd_price prd_imgs prd_ctg_id prd_mfg_date prd_exp_date prd_desc prd_company');
            result.order_items[i] = { orderitm_qty: result.order_items[i].prd_qty, ...prd._doc };   
            result.order_items[i].prd_ctg = await category.findById( result.order_items[i].prd_ctg_id).select('ctg_name');
            result.order_items[i].prd_ctg_id = undefined;
            result.order_items[i].prd_mfg_date =  result.order_items[i].prd_mfg_date.toLocaleDateString();
            result.order_items[i].prd_exp_date =  result.order_items[i].prd_exp_date.toLocaleDateString();
            result.order_items[i].prd_imgs =  result.order_items[i].prd_imgs.map(img => `http://localhost:${process.env.PORT}/${process.env.UPLOAD_DIR.split('/')[2]}/${img}`);
        }
        return result = { ...result._doc, order_items: orderitms };
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

/* const orderDelete = async (data) => {
    try {
        let us = await orders.findById(data.id);
        if (!us) return "NoTFound";
        await orders.findOneAndDelete({ _id: data.id });
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
} */

module.exports = { orderAll, orderGet/*, orderDelete */ };