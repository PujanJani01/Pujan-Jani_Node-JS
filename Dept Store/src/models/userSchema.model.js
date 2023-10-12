const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_first_name: {
        type: String,
        required: true,
    },
    user_last_name : {
        type: String,
    },
    user_gender : {
        type: String
    },
    user_role : {
        type: String,
        required: true,
        default: 'user'
    },
    user_email : {
        type: String,
        required: true,
        unique: true
    },
    user_pass : {
        type: String,
        required: true,
    },
    user_phone : {
        type: Number,
        required: true,
        unique: true
    }/* ,
    user_staff_joing_date : {
        type: Date,
    }, */
}
, {timestamps: true});

const user = mongoose.model('User', userSchema);

module.exports = user;
