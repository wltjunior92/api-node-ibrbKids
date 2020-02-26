const Evento = require('../models/Evento');
const Ministerio = require('../models/Ministerio');
const Usuario = require('../models/Usuario');

module.exports = {
  async index(req, res) {
    const eventos = await Evento.findAll();

    return res.json(eventos);
  },
  
  async store(req, res) {
    const { usuario_id } = req.params;
    const { descricao, data } = req.body;

    const usuario = await Usuario.findByPk(usuario_id);
    const { id: ministerio_id} = await Ministerio.findByPk(usuario.ministerio_id);

    if (!usuario) {
      return res.status(400).json({ error: "Usuario responsável não encontrado" });
    };

    const evento = await Evento.create({
      ministerio_id,
      descricao,
      data,
    });
    
    await usuario.addEvento(evento);

    return res.json(evento);
  },
};