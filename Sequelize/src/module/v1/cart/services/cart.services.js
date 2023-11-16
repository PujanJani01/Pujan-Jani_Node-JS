const Cart = require('../../../../model/cart.model');
const Cart_items = require('../../../../model/cart-items.model');
const User = require('../../../../model/user.model');
const Product = require('../../../../model/product.model');

const cartGet = async (user) => {

    let cart = await Cart.findOne({ where: { cart_fk_user_id: user.id } })

    if (!cart) return;

    cart = cart.toJSON();

    let userData = await User.findOne({
        where: { user_id: user.id },
        attributes: ['user_id', 'user_name', 'user_email']
    });

    userData = userData.toJSON();

    cart.cart_fk_user_id = userData;

    let cart_items = await Cart_items.findAll({
        where: { cartitm_fk_cart_id: cart.cart_id },
        attributes: ['cartitm_fk_prd_id', 'cartitm_prd_qty']
    });

    cart_items = JSON.parse(JSON.stringify(cart_items));

    const pdIds = cart_items.map(item => item.cartitm_fk_prd_id);

    let products = await Product.findAll({ where: { prd_id: pdIds } });

    products = JSON.parse(JSON.stringify(products));

    cart_items.forEach(item => {
        products.forEach(prd => {
            if (prd.prd_id == item.cartitm_fk_prd_id)
                item.cartitm_fk_prd_id = prd;
        })
    })

    cart.cart_items = cart_items;

    cart.cart_total_amount = cart_items.reduce((total, cartItem) => total + cartItem.cartitm_prd_qty * cartItem.cartitm_fk_prd_id.prd_price, 0);

    return cart;
}


const cartAdd = async (body, user) => {

    if(body.cart_items.some(item => item.cartitm_prd_qty > 5))
        throw new Error('MAX_QTY_EXCEEDED');

    let count = await Cart.count({ where: { cart_fk_user_id: user.id } });

    if (count == 0) {
        if (body.cart_items.some(item => item.cartitm_prd_qty == 0))
            throw new Error('INVALID_DATA');
        else {
            let cart = await Cart.create({ cart_fk_user_id: user.id });

            cart = cart.toJSON();

            let items = body.cart_items.map(item => ({ cartitm_fk_cart_id: cart.cart_id, cartitm_fk_prd_id: item.cartitm_fk_prd_id, cartitm_prd_qty: item.cartitm_prd_qty }))

            return await Cart_items.bulkCreate(items, { fields: ['cartitm_fk_cart_id', 'cartitm_fk_prd_id', 'cartitm_prd_qty']});
        }
    }

    let cart = await Cart.findOne({ where: { cart_fk_user_id: user.id } });

    let cart_items = await Cart_items.findAll({
         where: { cartitm_fk_cart_id: cart.cart_id },
         attributes: ['cartitm_fk_prd_id', 'cartitm_prd_qty']
         });

    cart_items = JSON.parse(JSON.stringify(cart_items));

    let items = body.cart_items.map(item => ({ cartitm_fk_cart_id: cart.cart_id, cartitm_fk_prd_id: item.cartitm_fk_prd_id, cartitm_prd_qty: item.cartitm_prd_qty }));

    await Cart_items.bulkCreate(items,  { fields: ['cartitm_fk_cart_id', 'cartitm_fk_prd_id', 'cartitm_prd_qty'], updateOnDuplicate: ['cartitm_prd_qty'] });

    if(body.cart_items.some(item => item.cartitm_prd_qty == 0))
        await Cart_items.destroy({ where: { cartitm_fk_cart_id: cart.cart_id, cartitm_prd_qty: 0 } });

}

const cartDelete = async (data) => {

    await Cart_items.destroy({ where: { cartitm_fk_cart_id: data.cart_id, cartitm_fk_prd_id: data.cart_items } });
}

module.exports = { cartGet, cartAdd, cartDelete };



