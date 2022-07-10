'use strict';

import Sequelize, { Model } from 'sequelize'
class categorias extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      und_medida: Sequelize.STRING,
      estoque_min: {
        type: Sequelize.DECIMAL(10,2),
        validate: {
          isNumeric: {
            args: true,
            msg: 'Campo só aceita números'
          }
        }
      },
      //user_id: Sequelize.INTEGER
    }, {
      sequelize,
      name: {
        singular: 'categoria',
        plural: 'categorias'
      }
    })

    this.addHook('beforeValidate', async (categoria) => {
      const estoque_min = categoria.estoque_min
      if (categoria.estoque_min) {
        categoria.estoque_min = estoque_min.replace(",", ".")
      }
    })
  }
  static associate(models) {
    this.belongsTo(models.users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.materiais, {
      foreignKey: 'categorias_id',
    })
  }
}

export default categorias;