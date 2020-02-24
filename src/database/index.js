const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Ministerio = require('../models/Ministerio');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Ministerio.init(connection);

module.exports = connection;