const Sequelize = require("sequelize");


const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD || '', {
  host: ( process.env.DATABASE_HOST || '127.0.0.1'),
  dialect: 'mysql',
   pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
  module.exports = sequelize;



