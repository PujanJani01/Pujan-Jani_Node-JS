const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    order_items: {
        type: Array,
        required: true
    },
    order_total_amount: {
        type: String,
        required: true,
    }
},
{timestamps: true});

const order = mongoose.model('Order', orderSchema);

module.exports = order;
     