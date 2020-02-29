const { Op } = require('sequelize');

const Entidade = require('../models/Entidade');
const mailer = require('../config/mailer');
const { admMail } = require('../config/mail.json');

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

  enviarEmailConfirmacao(entidade, usuario) {
    const nomeUsuario = usuario.nome;
    const { id, nome: nomeEntidade, created_at: dataCriacao } = entidade;

    mailer.sendMail({
      to: admMail,
      from: admMail,
      template: 'confirm/confirmaEntidade',
      context: {
        nomeUsuario,
        id,
        nomeEntidade,
        dataCriacao,
      }
    }, (err) => {
      console.log(err);
      if (err) {
        return err;
      }
    })
  }
}