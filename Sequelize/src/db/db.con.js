const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig);

sequelize.authenticate()
.then(() => {
    console.log('mysql connected');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

(async () => {
    await sequelize.sync({ force: true });
})();

module.exports = sequelize;