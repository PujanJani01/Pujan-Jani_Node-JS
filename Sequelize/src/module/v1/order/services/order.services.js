const Cart = require('../../../../model/cart.model');
const Cart_items = require('../../../../model/cart-items.model');
const Order = require('../../../../model/order.model');
const Order_items = require('../../../../model/order-items.model');
const Product = require('../../../../model/product.model');
const User = require('../../../../model/user.model');
const moment = require('moment-timezone');
const { Op, Sequelize } = require('sequelize');
const sequelize = require('../../../../db/db.con');

const orderAll = async () => {

    const today = moment().tz('Asia/Kolkata').startOf('day');

    let data = await Order_items.findAll({
        attributes: [
            [Sequelize.fn('SUM', Sequelize.col('orderitm_prd_qty')), 'prd_total_qty'],
            [Sequelize.fn('SUM', Sequelize.literal('orderitm_prd_qty * product.prd_price')), 'prd_total_amount'],
            [Sequelize.fn('GROUP_CONCAT', Sequelize.literal('DISTINCT order.order_fk_user_id')), 'users'],
            [Sequelize.literal('GROUP_CONCAT(DISTINCT orderitm_prd_qty)'), 'prd_qty'],
            'product.*'
        ],
        include: [
            {
                model: Product,
                as: 'product',
                attributes: [],
            },
            {
                model: Order,
                as: 'order',
                attributes: [],
                where: {
                    createdAt: {
                        [Op.gte]: moment(today).toDate(),
                        [Op.lt]: moment(today).add(1, 'days').toDate()
                    }
                },
            },
        ],
        group: ['prd_id'],
        order: [[Sequelize.literal('prd_total_amount'), 'DESC']],
        raw: true
    });

    data = JSON.parse(JSON.stringify(data));

    let userId = data.map(item => item.users.split(',')).flat();

    userId = [...new Set(userId)];

    let users = await User.findAll({
        where: {
            user_id: {
                [Op.in]: userId
            }
        },
        attributes: ['user_id', 'user_name']
    });

    users = JSON.parse(JSON.stringify(users));
    

    users = users.reduce((acc, item) => {
        acc[item.user_id] = item;
        return acc;
    }, {});

    prdQty = data.map(item => item.prd_qty.split(',')).flat();

    const formattedData = data.map((item) => ({
        itmprd_total_qty: Number(item.prd_total_qty),
        prd_total_amount: Number(item.prd_total_amount),
        product_data: {
            prd_id: item.prd_id,
            prd_name: item.prd_name,
            prd_price: item.prd_price,
            prd_img: item.prd_img,
        },
        users: item.users,
        prd_qty: item.prd_qty
    }));

   formattedData.forEach(item => {
         item.prd_qty = item.prd_qty.split(',');
         item.users = item.users.split(',').map((id,i) => ({...users[id], prd_qty: Number(item.prd_qty[i])}));
    });

    return formattedData;
};


const orderAdd = async (body) => {

    let cart = await Cart.findOne({ where: { cart_fk_user_id: body.user_id } });

    if (!cart) return;

    const today = moment().tz('Asia/Kolkata').startOf('day');

    let order = await Order.findOne({
        where: {
            order_fk_user_id: body.user_id,
            createdAt: {
                [Op.gte]: moment(today).toDate(),
                [Op.lt]: moment(today).add(1, 'days').toDate()
            }
        },
        attributes: ['order_id', 'order_fk_user_id', 'createdAt', 'updatedAt']
    });

    if (!order)
        order = await Order.create({ order_fk_user_id: body.user_id });

    order = order.toJSON();

    let orderItems = await Order_items.findAll({
        where: {
            orderitm_fk_order_id: order.order_id
        },
        attributes: ['orderitm_fk_order_id', 'orderitm_fk_prd_id', 'orderitm_prd_qty']
    });

    let cartItems = await Cart_items.findAll({
        where: {
            cartitm_fk_cart_id: cart.cart_id
        },
        attributes: ['cartitm_fk_cart_id', 'cartitm_fk_prd_id', 'cartitm_prd_qty']
    });

    if (!cartItems.length) return;

    orderItems = JSON.parse(JSON.stringify(orderItems));
    cartItems = JSON.parse(JSON.stringify(cartItems));

    let values = cartItems.map(item => `(${order.order_id}, ${item.cartitm_fk_prd_id}, ${item.cartitm_prd_qty})`).join(', ');

    await sequelize.query(
        `INSERT INTO order_items (orderitm_fk_order_id, orderitm_fk_prd_id, orderitm_prd_qty)
        VALUES ${values}
        ON DUPLICATE KEY UPDATE 
          orderitm_prd_qty = orderitm_prd_qty + VALUES(orderitm_prd_qty);
          `);

    return await Cart_items.destroy({ where: { cartitm_fk_cart_id: cart.cart_id } });

}


module.exports = { orderAdd, orderAll };