const mongoose = require("mongoose");

const productImageSchema = new mongoose.Schema({
    prdimg_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    prdimg_img: {
        type: String,
        required: true,
        undiuque: true
    },
},
{timestamps: true}
);

const productImage = mongoose.model('Product_img', productImageSchema);

module.exports = productImage;