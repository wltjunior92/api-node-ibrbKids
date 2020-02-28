const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      numero: DataTypes.STRING,
      cep: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'tb_endereco'
    })
  }

  static associate(models) {
    this.belongsTo(models.Crianca, { foreignKey: 'crianca_id', as: 'crianca' });
  }
}

module.exports = Endereco;