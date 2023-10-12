const user = require("../../../../models/userSchema.model");
let { createToken } = require("../../../../middlewares/token");

const login = async (data) => {
    try {
        let u = await user.findOne({ user_email: data.user_email, user_pass: data.user_pass });
        if (!u) return undefined;
        let userData = { id: u._id, role: u.user_role };
        let encodedData = createToken(userData);
        return { ...userData, token: encodedData };
    } catch (error) {
        console.log(error);
    }
}

module.exports = { login } ;