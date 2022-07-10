'use strict';
import Sequelize, { Model } from 'sequelize'

class transacoes_saida extends Model {
  static init(sequelize){
    super.init({
      data_de_retirada: Sequelize.DATE,
      qtd: {
        type: Sequelize.DECIMAL(10, 2),
        validate: {
          isNumeric: {
            args: true,
            msg: 'Campo só aceita números'
          }
        }
      },
      valor: {
        type: Sequelize.DECIMAL(10, 2),
        validate: {
          isNumeric: {
            args: true,
            msg: 'Campo só aceita números'
          }
        }
      },
      op: Sequelize.STRING,
      obs: Sequelize.TEXT,
    }, {
      sequelize,
      name: {
        singular: 'transacoes_saida',
        plural: 'transacoes_saidas'
      },
    })

    this.addHook('beforeValidate', async (transacoes_saida) => {
      const qtd = transacoes_saida.qtd
      const valor = transacoes_saida.valor
      if (transacoes_saida.qtd) {
        transacoes_saida.qtd = qtd.replace(",", ".")
      }
      if (transacoes_saida.valor) {
        transacoes_saida.valor = valor.replace(",", ".")
      }
    })
    this.addHook('beforeValidate', async (transacoes_saida) => {
       if(typeof transacoes_saida.data_de_retirada === 'undefined') {
        transacoes_saida.data_de_retirada = new Date()
       }
 
    })
  }
  static associate(models) {
    this.belongsTo(models.users, {
      foreignKey: 'user_id'
    })
    this.belongsTo(models.requisitantes, {
      foreignKey: 'requisitante_id'
    })
    this.belongsTo(models.destinos, {
      foreignKey: 'destino_id'
    })
    this.belongsTo(models.materiais, {
      foreignKey: 'material_id'
    })
  }
}

export default transacoes_saida