'use strict';

import Sequelize, { Model } from 'sequelize'
class Transportadoras extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      fone: Sequelize.STRING
    }, {
      sequelize,
      modelName: 'Transportadoras'
    })
  }
  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
  }
}

export default Transportadoras;