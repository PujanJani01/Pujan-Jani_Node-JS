const { hashPassword } = require("../../../../common/encrypt");
const user = require("../../../../models/user.model");


const register = async (data) => {
     try {
        await hashPassword(data);
        let check1 = await user.findOne({ user_email: data.user_email });
        let check2 = await user.findOne({ user_phone: data.user_phone }); 
        if(check1 || check2) return "User already exists";
        await user.create(data);
     } catch (err) {
          console.log(err);
     }
}


module.exports = { register };