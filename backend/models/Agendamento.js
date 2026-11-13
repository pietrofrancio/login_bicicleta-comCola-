// código do agendamento, data da reserva, horário da reserva, código da 
// bicicleta e código do ciclista relacionado ao agendamento.

//  Código da bicicleta, modelo, tipo, aro, e código do ciclista relacionado. 
const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Agendamento = db.define('agendamento', {
    codAgendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATEONLY, // sempre DATEONLY
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME, // sempre TIME
        allowNull: false
    },
    idBicicleta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'bicicletas',
            key: 'codBicicleta'
        }
    },
    idCiclista: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ciclistas',
            key: 'codCiclista'
        }
    }
}, {
    timestamps: false,
    tableName: 'agendamentos'
})

module.exports = Agendamento