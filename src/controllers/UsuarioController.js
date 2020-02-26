const Usuario = require('../models/Usuario');
const Ministerio = require('../models/Ministerio');

module.exports = {
  async index(req, res) {
    const { ministerio_id } = req.params;
    const ministerios = await Ministerio.findByPk(ministerio_id, {
      include: { association: 'usuarios' }
    });

    return res.json(ministerios.usuarios);
  },
  
  async store(req, res) {
    const { ministerio_id } = req.params;
    const { nome, usuario, senha,  nascimento, email, telefone } = req.body;

    const ministerio = await Ministerio.findByPk(ministerio_id);
    
    if (!ministerio) {
      return res.status(400).json({ error: "Ministério não encontrado" });
    };

    const novoUsuario = await Usuario.create({
      nome,
      usuario,
      senha,
      nascimento,
      email,
      telefone,
      ministerio_id,
    });

    return res.json(novoUsuario);
  },
};