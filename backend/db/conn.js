const { Sequelize } = require("sequelize");

const db = new Sequelize('db_oficina', 'root', 'root',{
    port: 3306,
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db