'use strict';

import Sequelize, { Model } from 'sequelize'
class Transportadoras extends Model {
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
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Transacoes_entrada, {
      foreignKey: 'transportadora_id'
    })
  }
}

export default Transportadoras;