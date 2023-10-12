const mongoConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

function mongooseConnect(){
    mongoose.connect(`mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`)
    .then(() => console.log("MongoDb connected"))
    .catch((err) => console.log(err));
}

module.exports = mongooseConnect;