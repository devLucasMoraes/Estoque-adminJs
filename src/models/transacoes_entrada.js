'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transacoes_entrada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transacoes_entrada.init({
    qtd: DataTypes.DECIMAL,
    valor: DataTypes.DECIMAL,
    valor_frete: DataTypes.DECIMAL,
    nfe: DataTypes.STRING,
    obs: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Transacoes_entrada',
  });
  return Transacoes_entrada;
};