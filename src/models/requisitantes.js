'use strict';

import Sequelize, { Model } from 'sequelize'
class Requisitantes extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      fone: Sequelize.STRING
    }, {
      sequelize,
      modelName: 'Requisitantes'
    })
  }
  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
  }
}

export default Requisitantes;