const { config } = require('../configs/users.js');

const registerService = (data) => {
    let user = config.find((user) => user.username == data.username && user.password == data.password);
    if (user) return { status: 400, messege: "User already exists" };
    config.push(data);
    return { status: 200, messege: "Ok", data: {...data, id: config.length + 1 } };
}

module.exports = { registerService };