const carts = require('../../../../models/cart.model');
const cartItems = require('../../../../models/cartItems.model');
const order = require('../../../../models/order.model');
const product = require('../../../../models/product.model');
const category = require('../../../../models/category.model');
const { default: mongoose } = require('mongoose');

const cartAll = async (data) => {
    try {
        let result = null;
        let uid = new mongoose.Types.ObjectId(data.id);
        if(data.role == 'customer') result = await carts.find({ cart_user_id: uid })
        else result = await carts.find();
        if (!result) return null;
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


const cartDelete = async (user) => {
    try {
        let cart = await carts.findOne({ cart_user_id: user.id });
        if (!cart) return "NotFound";
        await cartItems.deleteMany({ cartitm_cart_id: cart._id });
        await carts.findOneAndDelete({ _id: cart._id });
    } catch (err) {
        console.log(err);
    }
}

const cartCheck = async (data) => {
    try {
        let cart = await carts.findOne({ _id: data.cid });
        if (!cart) return "NotFound";
        let prds = await cartItems.find({ cartitm_cart_id: cart._id });
        let orderitms = prds.map(prd => ({ prd_id: prd.cartitm_prd_id, prd_qty: prd.cartitm_qty }));
        let total = 0;
        for (i = 0; i < orderitms.length; i++) {
            let prd = await product.findById(orderitms[i].prd_id);
            total += prd.prd_price.split('.')[1] * orderitms[i].prd_qty;
        }
        await order.create({ order_user_id: cart.cart_user_id, order_items: orderitms, order_total_amount: 'Rs.' + total });
        await cartItems.deleteMany({ cartitm_cart_id: cart.id });
        await carts.findOneAndDelete({ _id: cart._id });
    } catch (err) {
        console.log(err);
    }
}

const cartAdd = async (data, user) => {
    try {
        let result = await carts.findOne({ cart_user_id: user.id });
        if (result) return "Already Exists";
        let prds = [...data.cart_products];
        result = await carts.create({ cart_user_id: user.id });
        let usercart = await carts.findOne({ cart_user_id: user.id });
        let cartitms = prds.map(prd => ({ cartitm_cart_id: usercart.id, cartitm_prd_id: prd.prd_id, cartitm_qty: prd.prd_qty }));
        return await cartItems.insertMany(cartitms);
    } catch (err) {
        console.log(err);
    }
}

const cartUpdate = async (data, user) => {
    try {
        let usercart = await carts.findOne({ cart_user_id: user.id });
        if (!usercart) return "NotFound";
        for (let i = 0; i < data.cart_items.length; i++) {
            let cartitm = null;
            cartitm= await cartItems.findOne({ cartitm_cart_id: usercart._id, cartitm_prd_id: data.cart_items[i].prd_id });
            if (!cartitm) await cartItems.create({ cartitm_cart_id: usercart._id, cartitm_prd_id: data.cart_items[i].prd_id, cartitm_qty: data.cart_items[i].prd_qty });
            cartitm = await cartItems.findOne({ cartitm_cart_id: usercart._id, cartitm_prd_id: data.cart_items[i].prd_id });
            await cartItems.findByIdAndUpdate(cartitm._id, { cartitm_qty: data.cart_items[i].prd_qty });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { cartAll, cartGet, cartDelete, cartCheck, cartAdd, cartUpdate };