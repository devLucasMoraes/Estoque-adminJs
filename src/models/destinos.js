'use strict';

import Sequelize, { Model } from 'sequelize'
class destinos extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      fone: Sequelize.STRING
    }, {
      sequelize,
      name: {
        singular: 'destino',
        plural: 'destinos'
      }
    })
  }
  static associate(models) {
    this.belongsTo(models.users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.transacoes_saida, {
      foreignKey: 'destino_id'
    })
  }
}

export default destinos;