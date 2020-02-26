const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const MinisterioController = require('./controllers/MinisterioController');
const EventoController = require('./controllers/EventoController');

const routes = express.Router();

// Usuario
// Buscar todos por ministerio
routes.get('/ministerios/:ministerio_id/usuarios', UsuarioController.index);
// Criar Usuario
routes.post('/ministerios/:ministerio_id/usuarios', UsuarioController.store);

// Ministerio
// Buscar Todos
routes.get('/ministerios', MinisterioController.index);
// Criar Ministerio
routes.post('/ministerios', MinisterioController.store);

// Evento
// Buscar todos por ministerio
routes.get('/eventos', EventoController.index);
// Criar Evento
routes.post('/usuarios/:usuario_id/eventos', EventoController.store);

module.exports = routes;