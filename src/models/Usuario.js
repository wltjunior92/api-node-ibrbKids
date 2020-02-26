const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      usuario: DataTypes.STRING,
      senha: DataTypes.STRING,
      nascimento: DataTypes.DATE,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'tb_usuario'
    })
  }

  static associate(models) {
    this.belongsTo(models.Ministerio, { foreignKey: 'ministerio_id', as: 'ministerio' });
    this.belongsToMany(models.Evento, {
      through: 'tb_usuario_evento',
      sourceKey: 'id',
      targetKey: 'id',
      foreignKey: 'usuario_id',
      as: 'eventos'
    })
  }
}

module.exports = Usuario;