const { buscarPeloNome, enviarEmailConfirmacao } = require('../services/EntidadeService');

const Entidade = require('../models/Entidade');
const Usuario = require('../models/Usuario');


module.exports = {
  async index(req, res) {
    const entidades = await Entidade.findAll({
      where: {
        ativo: true,
      }
    });

    return res.json(entidades);
  },

  async show(req, res) {
    const { nomeEntidade } = req.body;

    const entidade = await buscarPeloNome(nomeEntidade);

    if (!entidade) {
      return res.status(404).json({
        mensagem: 'Nenhuma entidade encontrada'
      })
    }

    return res.json(entidade);
  },
  
  async store(req, res) {
    const { nome } = req.body;
    const { idUsuario } = req.params;

    const usuario = await Usuario.findByPk(idUsuario);

    if (!usuario) {
      return res.status(400).json({
        mensagem: 'Usuário não encontrado',
      });
    };

    const entidadeUsuario = await usuario.getEntidade();
    
    if(!entidadeUsuario) {
      try {
        
        const entidade = await Entidade.create({
          nome,
        });
    
        await usuario.setEntidade(entidade);
        usuario.adm = true;
        await usuario.save();
        enviarEmailConfirmacao(entidade, usuario);
        return res.json(entidade);

      } catch (err) {
        console.log(err);
        return res.status(400).json({
          mensagem: 'Erro ao criar entidade',
        });
      }
    } else {
      return res.status(400).json({
        mensagem: 'Usuário já está viculado a outra entidade',
      });
    }
  },
};