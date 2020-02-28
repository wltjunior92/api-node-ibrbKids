const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Entidade = require('../models/Entidade');
const Evento = require('../models/Evento');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Entidade.init(connection);
Evento.init(connection);

Usuario.associate(connection.models);
Entidade.associate(connection.models);
Evento.associate(connection.models);

module.exports = connection;