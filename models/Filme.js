// models/Filme.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Filme = sequelize.define('Filme', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lancamento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    diretor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Filme;
