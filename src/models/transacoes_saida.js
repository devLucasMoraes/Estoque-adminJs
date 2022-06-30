'use strict';
import Sequelize, { Model } from 'sequelize'

class Transacoes_saida extends Model {
  static init(sequelize){
    super.init({
      qtd: Sequelize.DECIMAL(10, 2),
      valor: Sequelize.DECIMAL(10, 2),
      op: Sequelize.STRING,
      obs: Sequelize.TEXT,
      data_de_retirada: Sequelize.DATE,
    }, {
      sequelize,
      name: {
        singular: 'Transacoes_saida',
        plural: 'Transacoes_saidas'
      },
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