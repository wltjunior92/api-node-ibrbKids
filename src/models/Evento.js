const { Model, DataTypes } = require('sequelize');

class Evento extends Model {
  static init(sequelize) {
    super.init({
      tipo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      data: DataTypes.DATE,
    }, {
      sequelize,
      tableName: 'tb_evento'
    })
  }

  static associate(models) {
    this.belongsTo(models.Entidade, { foreignKey: 'entidade_id', as: 'entidade' });
    this.belongsToMany(models.Usuario, {
      through: 'tb_usuario_evento',
      sourceKey: 'id',
      targetKey: 'id',
      foreignKey: 'evento_id',
      as: 'usuarios'
    })
  }
}

module.exports = Evento;