const Usuario = require('../models/Usuario');

module.exports = {
  async store(req, res) {
    const { nome, usuario, senha, nascimento, email, telefone } = req.body;

    const novoUsuario = await Usuario.create({
      nome,
      usuario,
      senha,
      nascimento,
      email,
      telefone,
    });
    
    return res.json(novoUsuario);
  },
};