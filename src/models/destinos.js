'use strict';

import Sequelize, { Model } from 'sequelize'
class Destinos extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      fone: Sequelize.STRING
    }, {
      sequelize,
      modelName: 'Destinos'
    })
  }
  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
  }
}

export default Destinos;