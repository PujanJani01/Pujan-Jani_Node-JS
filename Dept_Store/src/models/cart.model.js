const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    cart_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cart_items: {
        type: Array,
        required: true
    }
},
{timestamps: true});

const cart = mongoose.model('Cart', cartSchema);

module.exports = cart;
