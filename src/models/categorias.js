'use strict';

import Sequelize, { Model } from 'sequelize'
class Categorias extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      und_medida: Sequelize.STRING,
      estoque_min: Sequelize.DECIMAL,
      //user_id: Sequelize.INTEGER
    }, {
      sequelize,
      modelName: 'Categorias'
    })
  }
  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Materiais, {
      foreignKey: 'categorias_id',
    })
  }
}

export default Categorias;