'use strict';

import Sequelize, { Model } from 'sequelize'
class Destinos extends Model {
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
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Transacoes_saida, {
      foreignKey: 'destino_id'
    })
  }
}

export default Destinos;