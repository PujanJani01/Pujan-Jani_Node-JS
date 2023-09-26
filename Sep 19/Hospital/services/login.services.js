const { config } = require('../configs/users.js');
const { createToken } = require('../middlewares/auth/token.js');


const loginService = (data) => {
    let user = config.find((user) => user.username == data.username && user.password == data.password);
    if (!user) return { status: 404, messege: "User not found" };
    let userData = { ...user };
    delete userData.password;
    delete userData.username;
    let encodedData = createToken(userData);
    return { status: 200, messege: "Ok", data: { ...userData, token: encodedData } };
}

module.exports = { loginService };