'use strict';
import Sequelize, { Model } from 'sequelize'


class Materiais extends Model {
  static init(sequelize) {
    super.init({
      descricao: Sequelize.STRING
    }, {
      sequelize,
      modelName: 'Materiais',
    })
  }
  static associate(models) {
    this.belongsTo(models.Categorias, {
      foreignKey: 'categorias_id'
    })
    this.belongsTo(models.Users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Transacoes_entrada, {
      foreignKey: 'material_id'
    })
  }
}

export default Materiais
