const bycrypt = require('bcryptjs');

const hasPassword = async(data) => {
    const salt = await bycrypt.genSalt(10);
    data.user_pass = await  bycrypt.hash(data.user_pass, salt);
}

const comparePassword = async(data, hash) => {
   return await bycrypt.compare(data, hash);
}

module.exports = { hasPassword, comparePassword };