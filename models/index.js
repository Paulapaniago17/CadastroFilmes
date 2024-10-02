// models/index.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cadastrofilmes', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
