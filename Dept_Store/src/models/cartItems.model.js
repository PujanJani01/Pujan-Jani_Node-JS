const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    cartitm_cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    },
    cartitm_prd_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true  
    },
    cartitm_qty: {
        type: Number,
        required: true,
    },
},
{timestamps: true}
);

const cartItems = mongoose.model('Cart_item', cartItemSchema);

module.exports = cartItems;