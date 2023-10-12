const mongoose = require('mongoose');
// const dbConfig = require('../config/db.config');

const mongooseConnect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/college')
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log("MongoDB Error", err));
}

module.exports = mongooseConnect ;
