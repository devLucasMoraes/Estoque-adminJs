'use strict';

import Sequelize, { Model } from 'sequelize'
class transportadoras extends Model {
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
        singular: 'transportador',
        plural: 'transportadoras'
      }
    })
  }
  static associate(models) {
    this.belongsTo(models.users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.transacoes_entrada, {
      foreignKey: 'transportadora_id'
    })
  }
}

export default transportadoras;