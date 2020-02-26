const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Ministerio = require('../models/Ministerio');
const Evento = require('../models/Evento');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Ministerio.init(connection);
Evento.init(connection);

Usuario.associate(connection.models);
Ministerio.associate(connection.models);
Evento.associate(connection.models);

module.exports = connection;