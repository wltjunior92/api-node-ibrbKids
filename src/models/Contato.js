const { Model, DataTypes } = require('sequelize');

class Contato extends Model {
  static init(sequelize) {
    super.init({
      tipo: DataTypes.STRING,
      contato: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'tb_contato'
    })
  }

  static associate(models) {
    this.belongsTo(models.Crianca, { foreignKey: 'crianca_id', as: 'crianca' });
  }
}

module.exports = Contato;