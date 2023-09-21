const { config } = require('../configs/users.js');

const loggerService = (data) => {
    let user = config.find((user) => user.username == data.username && user.password == data.password);
    if (!user) return { status: 404, messege: "Login failed" };
    let userData = { ...user };
    delete userData.password;
    let encodedData = btoa(JSON.stringify(userData));
    return { status: 200, messege: "Ok", data: { ...userData, token: encodedData } };

}

module.exports = { loggerService };