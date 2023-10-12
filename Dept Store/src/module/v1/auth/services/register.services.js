
const user = require("../../../../models/userSchema.model");
const register = async (data) => {
     try {
        let check1 = await user.findOne({ user_email: data.user_email });
        let check2 = await user.findOne({ user_phone: data.user_phone }); 
        if(check1 || check2) return "User already exists";
        await user.create(data);
     } catch (err) {
          console.log(err);
     }
}


module.exports = { register };