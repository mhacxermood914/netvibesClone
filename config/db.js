const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});


module.exports = sequelize;
