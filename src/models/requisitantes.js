'use strict';

import Sequelize, { Model } from 'sequelize'
class Requisitantes extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      fone: Sequelize.STRING
    }, {
      sequelize,
      name: {
        singular: 'requisitante',
        plural: 'requisitantes'
      }
    })
  }
  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Transacoes_saida, {
      foreignKey: 'requisitante_id'
    })
  }
}

export default Requisitantes;