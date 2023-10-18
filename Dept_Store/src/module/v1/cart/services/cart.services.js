const carts = require('../../../../models/cart.model');
const cartItems = require('../../../../models/cartItems.model');
const order = require('../../../../models/order.model');
const product = require('../../../../models/product.model');
const category = require('../../../../models/category.model');
const { default: mongoose } = require('mongoose');

const cartAll = async (data) => {
    try {
        let result = null;
        console.log(data);
        let uid = new mongoose.Types.ObjectId(data.id);
        if(data.role == 'customer') result = await carts.find({ cart_user_id: uid })
        else result = await carts.find();
        if (!result) return null;
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            let cartitms = await cartItems.find({ cartitm_cart_id: result[i].id });
            let total = 0;
            for (let j = 0; j < cartitms.length; j++) {
                let prd = await product.findById(cartitms[j].cartitm_prd_id).select('prd_name prd_price prd_imgs prd_ctg_id prd_mfg_date prd_exp_date prd_desc prd_company');
                cartitms[j] = { cartitm_qty: cartitms[j]._doc.cartitm_qty, ...prd._doc };
                cartitms[j].prd_ctg = await category.findById(cartitms[j].prd_ctg_id).select('ctg_name');
                cartitms[j].prd_ctg_id = undefined;
                cartitms[j].prd_mfg_date = cartitms[j].prd_mfg_date.toLocaleDateString();
                cartitms[j].prd_exp_date = cartitms[j].prd_exp_date.toLocaleDateString();
                cartitms[j].prd_imgs = cartitms[j].prd_imgs.map(img => `http://localhost:${process.env.PORT}/${process.env.UPLOAD_DIR.split('/')[2]}/${img}`);
                total += prd.prd_price.split('.')[1] * cartitms[j].cartitm_qty;
            }
            result[i] = { ...result[i]._doc, cart_items: cartitms, cart_total_amount: 'Rs.' + total };
        }
        return result;
    } catch (err) {
        console.log(err);
    }
}

const cartGet = async (data) => {
    try {
        let cart = await carts.findById(data.id);
        let cartitms = await cartItems.find({ cartitm_cart_id: cart.id });
        let total = 0;
        for (let i = 0; i < cartitms.length; i++) {
            let prd = await product.findById(cartitms[i].cartitm_prd_id).select('prd_name prd_price prd_image prd_ctg_id prd_mfg_date prd_exp_date prd_desc prd_company');
            cartitms[i] = { cartitm_qty: cartitms[i]._doc.cartitm_qty, ...prd._doc };
            cartitms[i].prd_ctg = await category.findById(cartitms[i].prd_ctg_id).select('ctg_name');
            cartitms[i].prd_ctg_id = undefined;
            cartitms[i].prd_mfg_date = cartitms[i].prd_mfg_date.toLocaleDateString();
            cartitms[i].prd_exp_date = cartitms[i].prd_exp_date.toLocaleDateString();
            total += prd.prd_price.split('.')[1] * cartitms[i].cartitm_qty;
        }
        result = { ...cart._doc, cart_items: cartitms, cart_total_amount: 'Rs.' + total };
        if (!result) return null;
        return result;
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
}


const cartDelete = async (data) => {
    try {
        let us = await carts.findById(data.cid);
        if (!us) return "NoTFound";
        await carts.findOneAndDelete({ _id: data.cid });
    } catch (err) {
        if (err.kind === 'ObjectId') return null;
        console.log(err);
    }
}

const cartCheck = async (data) => {
    try {
        let cart = await carts.findOne({ _id: data.cid });
        if (!cart) return "NoTFound";
        let prds = await cartItems.find({ cartitm_cart_id: cart._id });
        let orderitms = prds.map(prd => ({ prd_id: prd.cartitm_prd_id, prd_qty: prd.cartitm_qty }));
        let total = 0;
        for (i = 0; i < orderitms.length; i++) {
            let prd = await product.findById(orderitms[i].prd_id);
            total += prd.prd_price.split('.')[1] * orderitms[i].prd_qty;
        }
        console.log(total);
        await order.create({ order_user_id: cart.cart_user_id, order_items: orderitms, order_total_amount: 'Rs.' + total });
        await cartItems.deleteMany({ cartitm_cart_id: cart.id });
        await carts.findOneAndDelete({ _id: cart._id });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { cartAll, cartGet, cartDelete, cartCheck };