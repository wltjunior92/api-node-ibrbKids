const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Entidade = require('../models/Entidade');
const Evento = require('../models/Evento');
const Crianca = require('../models/Crianca');
const Contato = require('../models/Contato');
const Endereco = require('../models/Endereco');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Entidade.init(connection);
Evento.init(connection);
Crianca.init(connection);
Contato.init(connection);
Endereco.init(connection);

Entidade.associate(connection.models);
Usuario.associate(connection.models);
Evento.associate(connection.models);
Crianca.associate(connection.models);
Contato.associate(connection.models);
Endereco.associate(connection.models);

module.exports = connection;