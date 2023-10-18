const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    ctg_name: {
        type: String,
        required: true,
        unique: true
    },
}
, {timestamps: true});

const category = mongoose.model('Category', categorySchema);

module.exports = category;
