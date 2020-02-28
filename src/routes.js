const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

// Criar Usuario
routes.post('/ministerios/usuarios', UsuarioController.store);

module.exports = routes;