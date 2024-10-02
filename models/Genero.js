const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Genero = sequelize.define('Genero', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Genero;
