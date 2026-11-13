const { DataTypes } = require("sequelize")

const db = require("../db/conn")

const Ciclista = db.define("Ciclista",{
    codCiclista: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cpf:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    tableName: "ciclistas",
    timestamps: false
})

module.exports = Ciclista