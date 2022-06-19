'use strict';
import Sequelize, { Model } from 'sequelize'



class Users extends Model {
  static init(sequelize) {
    super.init({
      username: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      role: Sequelize.ENUM('administrador', 'operador'),
      status: Sequelize.ENUM('ativo', 'desativado')
    }, {
      sequelize,
      modelName: 'Users'
    })
  }
  static associate(models) {
    this.hasMany(models.Categorias, {
      foreignKey: 'user_id'
    })
  }
}

export default Users

