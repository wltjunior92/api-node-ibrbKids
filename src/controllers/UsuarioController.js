const Usuario = require('../models/Usuario');

module.exports = {
  async index(req, res) {
    const usuarios = await Usuario.findAll();

    return res.json(usuarios);
  },
  
  async store(req, res) {
    const { nome, nascimento, email, telefone } = req.body;

    const usuario = await Usuario.create({
      nome,
      nascimento,
      email,
      telefone,
    });

    return res.json(usuario);
  },
};