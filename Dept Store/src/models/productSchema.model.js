const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    prd_name: {
        type: String,
        required: true,
    },
    prd_qty : {
        type: Number,
        required: true,
    },
    prd_min_qty : {
        type: Number,
        required: true,
    },
    prd_price : {
        type: Number,
        required: true,
    },
    prd_ctg_id : {
        type: String,
        required: true,
    },
    prd_mfg_date : {
        type: Date,
        required: true,
    },
    prd_exp_date : {
        type: Date,
        required: true,
    },
    prd_buy_date : {
        type: Date,
        required: true,
    },
    prd_is_visible : {
        type: Boolean,
        required: true,
        default: true
    }
}, {timestamps: true});

const product = mongoose.model('Product', productSchema);

module.exports = product;