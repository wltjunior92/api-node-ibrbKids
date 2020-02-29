const { Model, DataTypes } = require('sequelize');

class Entidade extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
    }, {
      sequelize,
      tableName: 'tb_entidade'
    })
  }

  static associate(models) {
    this.hasMany(models.Usuario, { foreignKey: 'entidade_id', as: 'usuarios' });
    this.hasMany(models.Evento, { foreignKey: 'entidade_id', as: 'eventos' });
  }
}

module.exports = Entidade;