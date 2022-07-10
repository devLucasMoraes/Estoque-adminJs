'use strict';
import Sequelize, { Model } from 'sequelize'


class estoque extends Model {
  static init(sequelize) {
    super.init({
      qtd_em_estoque: Sequelize.DECIMAL,
      valor_total: Sequelize.DECIMAL
    }, {
      sequelize,
      name: {
        singular: 'estoque',
        plural: 'estoques'
      },
    })
  }
  static associate(models) {
    this.belongsTo(models.materiais, {
      foreignKey: 'material_id'
    })
  }
}

export default estoque
