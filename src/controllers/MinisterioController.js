const Ministerio = require('../models/Ministerio');

module.exports = {
  async index(req, res) {
    const ministerios = await Ministerio.findAll();

    return res.json(ministerios);
  },
  
  async store(req, res) {
    const { nome } = req.body;

    const ministerio = await Ministerio.create({
      nome,
    });

    return res.json(ministerio);
  },
};