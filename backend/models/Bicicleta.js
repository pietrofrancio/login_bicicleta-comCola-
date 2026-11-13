//  Código da bicicleta, modelo, tipo, aro, e código do ciclista relacionado. 
const { DataTypes } = require("sequelize")

const db = require("../db/conn")

const Bicicleta = db.define("Bicicleta",{
    codBicicleta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    modelo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    aro:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    idCiclista:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: "ciclistas",
            key: "codCiclista" 
        }
    }
},{
    tableName: "bicicletas",
    timestamps: false
})

module.exports = Bicicleta