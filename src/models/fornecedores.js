'use strict';

import Sequelize, { Model } from 'sequelize'
class Fornecedores extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      fone: Sequelize.STRING
    }, {
      sequelize,
      modelName: 'Fornecedores'
    })
  }
  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
  }
}

export default Fornecedores;