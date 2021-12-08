const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./../config/db')
const Widget = sequelize.define('Widget', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
    }
}, {
    // Other model options go here
    tableName: 'widget',
    timestamps: false
});

module.exports = Widget;