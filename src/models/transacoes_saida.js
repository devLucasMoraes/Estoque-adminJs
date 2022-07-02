'use strict';
import Sequelize, { Model } from 'sequelize'

class Transacoes_saida extends Model {
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
        singular: 'Transacoes_saida',
        plural: 'Transacoes_saidas'
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
  }
  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
    this.belongsTo(models.Requisitantes, {
      foreignKey: 'requisitante_id'
    })
    this.belongsTo(models.Destinos, {
      foreignKey: 'destino_id'
    })
    this.belongsTo(models.Materiais, {
      foreignKey: 'material_id'
    })
  }
}

export default Transacoes_saida