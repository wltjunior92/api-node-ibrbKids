const Usuario = require('../models/Usuario');

module.exports = {
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