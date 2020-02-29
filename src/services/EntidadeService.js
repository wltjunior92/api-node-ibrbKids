const { Op } = require('sequelize');

const Entidade = require('../models/Entidade');

module.exports = {
  buscarPeloNome(nome) {
    const entidade = Entidade.findOne({
      where: {
        nome: {
          [Op.iLike]: `%${nome}%`
        },
      },
    });
  
    return entidade;
  },
}