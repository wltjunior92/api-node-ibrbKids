const { Model, DataTypes } = require('sequelize');

class Crianca extends Model {
  static init(sequelize) {
    super.init({
      visitante: DataTypes.BOOLEAN,
      nome: DataTypes.STRING,
      nascimento: DataTypes.DATE,
      nome_pai: DataTypes.STRING,
      nome_mae: DataTypes.STRING,
      url_foto: DataTypes.STRING,
      alergias: DataTypes.STRING,
      intolerancia: DataTypes.STRING,
      restricao_doces_refri: DataTypes.STRING,
      restricao_frutas: DataTypes.STRING,
      observacoes: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'tb_crianca'
    })
  }

  static associate(models) {
    this.belongsTo(models.Entidade, { foreignKey: 'entidade_id', as: 'entidade' });
    this.hasMany(models.Contato, { foreignKey: 'crianca_id', as: 'contatos' });
    this.hasMany(models.Endereco, { foreignKey: 'crianca_id', as: 'enderecos' });
  }
}

module.exports = Crianca;