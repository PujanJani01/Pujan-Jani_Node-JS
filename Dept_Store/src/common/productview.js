let category = require('../models/category.model');
require('dotenv').config();

const productview = async(result, data) => {
    for (let i = 0; i < result.length; i++) {
        result[i]._doc.prd_mfg_date = result[i].prd_mfg_date.toLocaleDateString();
        result[i]._doc.prd_exp_date = result[i].prd_exp_date.toLocaleDateString();
        result[i]._doc.prd_buy_date = result[i].prd_buy_date.toLocaleDateString();
        if (data.role != 'manager') {
            result[i]._doc.prd_is_visible = undefined;
            result[i]._doc.prd_min_qty = undefined;
            result[i]._doc.prd_buy_date = undefined;
        }
        result[i]._doc.prd_ctg = await category.findById(result[i].prd_ctg_id).select('ctg_name');
        result[i]._doc.prd_ctg_id = undefined;
        result[i]._doc.prd_imgs = result[i].prd_imgs.map(img => `http://localhost:${process.env.PORT}/${process.env.UPLOAD_DIR.split('/')[2]}/${img}`);
    };
    return result;
};

module.exports = productview;