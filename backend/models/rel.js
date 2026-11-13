const Agendamento = require('../models/agendamento')
const Ciclista = require('../models/ciclista')
const Bicicleta = require('../models/bicicleta')

Ciclista.hasMany(Agendamento,{
    foreignKey: 'ciclistaId',
    as: 'ciclistaAgendamento',
    onDelete: 'CASCADE'
})

Agendamento.belongsTo(Ciclista,{
    foreignKey: 'ciclistaId',
    as: 'agendamentoCiclista',
    allowNull: false
})

Bicicleta.hasMany(Agendamento,{
    foreignKey: 'bicicletaId',
    as: 'bicicletaAgendamento',
    onDelete: 'CASCADE'
})

Agendamento.belongsTo(Bicicleta,{
    foreignKey: 'bicicletaId',
    as: 'agendamentoBicicleta',
    allowNull: false
})

Ciclista.hasMany(Bicicleta,{
    foreignKey: 'ciclistaId',
    as: 'ciclistaBicicleta',
    onDelete: 'CASCADE'
})

Bicicleta.belongsTo(Ciclista,{
    foreignKey: 'ciclistaId',
    as: 'bicicletaCiclista',
    allowNull: false
})

module.exports = {
    Agendamento,
    Ciclista,
    Bicicleta
}