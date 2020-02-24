const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      nascimento: DataTypes.DATE,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
    }, {
      sequelize,
    })
  }
}

module.exports = Usuario;