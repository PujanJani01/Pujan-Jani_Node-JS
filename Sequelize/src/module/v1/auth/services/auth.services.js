const User = require('../../../../model/user.model');
const { createToken } = require('../../../../middlewares/jwt-token');
const { hasPassword, comparePassword } = require('../../../../common/hash-password');

const register = async (body) => {

    let exists = await User.findOne({ where: { user_email: body.user_email } });

    if (exists)
        throw new Error('ALREADY_EXISTS');

    await hasPassword(body); 

    await User.create(body);
  
    let user = await User.findOne({ where: { user_email: body.user_email } });

    let userData = { ...user.dataValues, user_pass: undefined };

    let encodedData = createToken({ id: user.user_id, role: user.user_role });

    return { userData, encodedData };

}

const login = async (body) => {
    
        let user = await User.findOne({ where: { user_email: body.user_email } });
    
        if (!user)
            throw new Error('INVALID_CREDENTIALS');

        let check = await comparePassword(body.user_pass, user.user_pass); 

        if(!check)
            throw new Error('INVALID_CREDENTIALS');
    
        let userData = { ...user.dataValues, user_pass: undefined };
    
        let encodedData = createToken({ id: user.user_id, role: user.user_role });
    
        return { userData, encodedData };
    
    }

module.exports = { register, login };