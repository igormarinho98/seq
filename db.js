const Sequelize = require('Sequelize');
const sequelize = new Sequelize('crud', 'sa', 'password_sqlserverxd',{
    dialect: 'mssql',
    host: '127.0.0.1',
    port: '1433'
})

module.exports = sequelize;