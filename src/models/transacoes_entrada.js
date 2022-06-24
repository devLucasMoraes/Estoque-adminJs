'use strict';
import Sequelize, { Model } from 'sequelize'

class Transacoes_entrada extends Model {
  static init(sequelize){
    super.init({
      qtd: Sequelize.DECIMAL(10, 2),
      valor: Sequelize.DECIMAL(10, 2),
      valor_frete: Sequelize.DECIMAL(10, 2),
      nfe: Sequelize.STRING,
      obs: Sequelize.TEXT
    }, {
      sequelize,
      name: {
        singular: 'Transacoes_entrada',
        plural: 'Transacoes_entradas'
      },
    })
  }
  static associate(models) {
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
    this.belongsTo(models.Transportadoras, {
      foreignKey: 'transportadora_id'
    })
    this.belongsTo(models.Fornecedores, {
      foreignKey: 'fornecedora_id'
    })
    this.belongsTo(models.Materiais, {
      foreignKey: 'material_id'
    })
  }
}

export default Transacoes_entrada