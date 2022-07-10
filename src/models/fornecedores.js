'use strict';

import Sequelize, { Model } from 'sequelize'
class Fornecedores extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      razao_social: Sequelize.STRING,
      cnpj: Sequelize.STRING,
      fone1: Sequelize.STRING,
      fone2: Sequelize.STRING,
    }, {
      sequelize,
      name: {
        singular: 'fornecedor',
        plural: 'fornecedores'
      }
    })
  }
  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Transacoes_entrada, {
      foreignKey: 'fornecedora_id'
    })
  }
}

export default Fornecedores;