'use strict';

import Sequelize, { Model } from 'sequelize'
class requisitantes extends Model {
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
    this.belongsTo(models.users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.transacoes_saida, {
      foreignKey: 'requisitante_id'
    })
  }
}

export default requisitantes;