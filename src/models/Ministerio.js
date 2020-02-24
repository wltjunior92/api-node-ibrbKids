const { Model, DataTypes } = require('sequelize');

class Ministerio extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize,
    })
  }
}

module.exports = Ministerio;