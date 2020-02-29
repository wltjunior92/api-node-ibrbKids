const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const EntidadeController = require('./controllers/EntidadeController');

const routes = express.Router();

// Criar Usuario
routes.post('/usuarios', UsuarioController.store);

// Listar todos - Entidade
routes.get('/entidades', EntidadeController.index);
// Buscar - Entidade
routes.get('/entidade', EntidadeController.show);
// Criar Entidade
routes.post('/usuarios/:idUsuario/entidades', EntidadeController.store);

module.exports = routes;