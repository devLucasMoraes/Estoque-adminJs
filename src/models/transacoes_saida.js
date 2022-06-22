'use strict';
import Sequelize, { Model } from 'sequelize'

class Transacoes_saida extends Model {
  static init(sequelize){
    super.init({
      qtd: Sequelize.DECIMAL,
      valor: Sequelize.DECIMAL,
      op: Sequelize.STRING,
      obs: Sequelize.TEXT
    }, {
      sequelize,
      modelName: 'Transacoes_saida',
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