'use strict';
import Sequelize, { Model } from 'sequelize'

import { creatPasswordHash, checkPassword} from '../services/auth.js'

class users extends Model {
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
      name: {
        singular: 'user',
        plural: 'users'
      }
    })
    this.addHook('beforeSave', async (user) => {
      //console.log(user)
      if (user.password) {
        user.password_hash = await creatPasswordHash(user.password)
      }
    })
  }
  static associate(models) {
    this.hasMany(models.categorias, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.materiais, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.fornecedores, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.transportadoras, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.transacoes_entrada, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.destinos, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.requisitantes, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.transacoes_saida, {
      foreignKey: 'user_id'
    })
  }

  checkPassword(password) {
    return checkPassword(this, password)
  }
}

export default users

