const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./../config/db')
const User = sequelize.define('User', {
    // Model attributes are defined here
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
    tableName: 'users',
    timestamps:false
});

module.exports = User;