'use strict';
import Sequelize, { Model } from 'sequelize'

import { creatPasswordHash, checkPassword} from '../services/auth.js'

class Users extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: 'E-mail invalido.'
          },
          notNull: {
            args: true,
            msg: 'Digite um email valido'
          }
        }
      },
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      role: Sequelize.ENUM('administrador', 'operador'),
      status: Sequelize.ENUM('ativo', 'desativado')
    }, {
      sequelize,
      modelName: 'Users'
    })
    this.addHook('beforeSave', async (user) => {
      //console.log(user)
      if (user.password) {
        user.password_hash = await creatPasswordHash(user.password)
      }
    })
  }
  static associate(models) {
    this.hasMany(models.Categorias, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Materiais, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Fornecedores, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Transportadoras, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Transacoes_entrada, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Destinos, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Requisitantes, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Transacoes_saida, {
      foreignKey: 'user_id'
    })
  }

  checkPassword(password) {
    return checkPassword(this, password)
  }
}

export default Users

