'use strict';
import Sequelize, { Model } from 'sequelize'

class transacoes_entrada extends Model {
  static init(sequelize){
    super.init({
      data_de_recebimento: Sequelize.DATE,
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
      valor_frete: {
        type: Sequelize.DECIMAL(10, 2),
        validate: {
          isNumeric: {
            args: true,
            msg: 'Campo só aceita números'
          }
        }
      },
      nfe: Sequelize.STRING,
      obs: Sequelize.TEXT,
    }, {
      sequelize,
      name: {
        singular: 'transacoes_entrada',
        plural: 'transacoes_entradas'
      },
    })

    this.addHook('beforeValidate', async (transacoes_entrada) => {
      const qtd = transacoes_entrada.qtd
      const valor = transacoes_entrada.valor
      const valor_frete = transacoes_entrada.valor_frete
      if (transacoes_entrada.qtd) {
        transacoes_entrada.qtd = qtd.replace(",", ".")
      }
      if (transacoes_entrada.valor) {
        transacoes_entrada.valor = valor.replace(",", ".")
      }
      if (transacoes_entrada.valor_frete) {
        transacoes_entrada.valor_frete = valor_frete.replace(",", ".")
      }
    })
  }
  static associate(models) {
    this.belongsTo(models.users, {
      foreignKey: 'user_id'
    })
    this.belongsTo(models.transportadoras, {
      foreignKey: 'transportadora_id'
    })
    this.belongsTo(models.fornecedores, {
      foreignKey: 'fornecedora_id'
    })
    this.belongsTo(models.materiais, {
      foreignKey: 'material_id'
    })
  }
}

export default transacoes_entrada