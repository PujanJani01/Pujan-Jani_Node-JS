const user = require('../../../../models/user.model');

const myprofileGet = async (data) => {
    try {
        let profile = await user.findById(data.id);
        return profile;

    } catch (err) {
        console.log(err);
    }
}

const myprofileUpdate = async (data) => {
    try {
        let profile = await user.findById(data.id);
        if(!profile) return "NotFound";
        hashPassword(data);
        await user.findOneAndUpdate({ _id: data.id }, data);
    } catch (err) {
        console.log(err);
    }
}

const myprofileDelete = async (data) => {
    try {
        let profile = await user.findById(data.id);
        if(!profile) return "NotFound";
        await user.findOneAndDelete({ _id: data.id });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { myprofileGet, myprofileUpdate, myprofileDelete }