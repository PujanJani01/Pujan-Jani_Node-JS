const user = require("../../../../models/user.model");
let { createToken } = require("../../../../middlewares/token");
let bcrypt = require("bcryptjs");
const { comparePassword } = require("../../../../common/encrypt");

const login = async (data) => {
    try {
        let u = await user.findOne({ user_email: data.user_email});
        if (!u) return undefined;
        let passcheck = await comparePassword(data.user_pass, u.user_pass);
        if(!passcheck) return undefined;
        let userData = { id: u._id, role: u.user_role };
        let encodedData = createToken(userData);
        return { ...userData, token: encodedData };
    } catch (error) {
        console.log(error);
    }
}

module.exports = { login } ;