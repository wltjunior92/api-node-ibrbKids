const { Model, DataTypes } = require('sequelize');

class Ministerio extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'tb_ministerio'
    })
  }

  static associate(models) {
    this.hasMany(models.Usuario, { foreignKey: 'ministerio_id', as: 'usuarios' });
    this.hasMany(models.Evento, { foreignKey: 'ministerio_id', as: 'eventos' });
  }
}

module.exports = Ministerio;