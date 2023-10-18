const cart = require('../../../../models/cart.model');
const cartItems = require('../../../../models/cartItems.model');

const usercartGet = async (data) => {
    try {
        let usercart = await cart.findOne({ cart_user_id: data.id });
        let cartitms = await cartItems.find({ cartitm_cart_id: usercart.id });
        let prds = cartitms.map(itm => ({ prd_id: itm.cartitm_prd_id, prd_qty: itm.cartitm_qty }));
         return { ...cart._doc, cart_products: prds };
    } catch (err) {
        console.log(err);
    }
}

const usercartAdd = async (data, user) => {
    try {
        let result = await cart.findOne({ cart_user_id: user.id });
        if (result) return "Already Exists";
        let prds = [...data.cart_products];
        result = await cart.create({ cart_user_id: user.id });
        let usercart = await cart.findOne({ cart_user_id: user.id });
        let cartitms = prds.map(prd => ({ cartitm_cart_id: usercart.id, cartitm_prd_id: prd.prd_id, cartitm_qty: prd.prd_qty }));
        return await cartItems.insertMany(cartitms);
    } catch (err) {
        console.log(err);
    }
}

const usercartUpdate = async (data) => {
    try {
        let usercart = await cart.findOne({ cart_user_id: data.id });
        if(!usercart) return "NotFound";
        console.log(data.cart_products.length)
        for(let i=0; i<data.cart_products.length; i++) {
            let cartitm = await cartItems.findOne({ cartitm_cart_id: usercart._id, cartitm_prd_id: data.cart_products[i].prd_id });
            if(!cartitm) await cartItems.create({ cartitm_cart_id: usercart._id, cartitm_prd_id: data.cart_products[i].prd_id, cartitm_qty: data.cart_products[i].prd_qty });
            await cartItems.findByIdAndUpdate(cartitm._id, { cartitm_qty: data.cart_products[i].prd_qty });
        }
    } catch (err) {
        console.log(err);
    }
}

const usercartDelete = async (data) => {
    try {
        let usercart = await cart.findOne({ cart_user_id: data.id });
        if(!usercart) return "NotFound";
        await cartItems.findByIdAndDelete({ cartitm_cart_id: usercart._id });
        await cart.findOneAndDelete({ _id: data.id });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { usercartGet, usercartUpdate, usercartDelete, usercartAdd }