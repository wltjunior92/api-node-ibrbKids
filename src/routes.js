const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const MinisterioController = require('./controllers/MinisterioController');

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);
routes.post('/usuarios', UsuarioController.store);

routes.get('/ministerios', MinisterioController.index);
routes.post('/ministerios', MinisterioController.store);

module.exports = routes;