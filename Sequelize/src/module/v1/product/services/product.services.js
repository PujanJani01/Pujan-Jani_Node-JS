const Product = require('../../../../model/product.model');
const { Op } = require('sequelize');
const sequelize = require('sequelize');

const productGet = async (body, user) => {

    let regex = new RegExp(body.search, 'i');

    let conditions = {
        where: {
            prd_name: { [Op.like]: `%${body.search}%` },
        }
    }

    if (user.role == "user") conditions.where.prd_is_visible = 1;
   
    let products = await Product.findAll(
        { ...conditions,
            attributes: ['prd_id', 'prd_name', 'prd_price', 'prd_is_visible'],
            limit: body.limit,
            offset: body.page * body.limit - body.limit
        });

    let total = await Product.findAndCountAll(conditions);
    count = Math.ceil(total.count / body.limit)

    return { products, total_page: count, total_products: total.count };
}

const productAdd = async (data) => {

    let check = await Product.findOne({ where: { prd_name: data.prd_name, prd_price: data.prd_price } });
    if (check)
        throw new Error("ALREADY_EXISTS");

    await Product.create(data);
}

const productUpdate = async (data) => {

    let count = await Product.findOne({ where: { prd_id: data.prd_id } }, { attributes: [[sequelize.fn('COUNT', sequelize.col('prd_id')), 'total']] });
    if (count == 0)
        throw new Error("DATA_NOT_FOUND");

    let check = await Product.findOne({ where: { prd_id: { [Op.ne]: data.prd_id }, prd_name: data.prd_name, prd_price: data.prd_price } }, { attributes: [[sequelize.fn('COUNT', sequelize.col('prd_id')), 'total']] });
    if (check)
        throw new Error("ALREADY_EXISTS");

    await Product.update({ ...data, prd_id: undefined }, { where: { prd_id: data.prd_id } });

}

const productDelete = async (data) => {

    await Product.update({ prd_is_visible: 0 }, { where: { prd_id: data.prd_ids } });

}

module.exports = { productGet, productAdd, productUpdate, productDelete };

