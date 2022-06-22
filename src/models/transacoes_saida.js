'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transacoes_saida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transacoes_saida.init({
    qtd: DataTypes.DECIMAL,
    valor: DataTypes.DECIMAL,
    op: DataTypes.STRING,
    obs: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Transacoes_saida',
  });
  return Transacoes_saida;
};