'use strict';
import Sequelize, { Model } from 'sequelize'


class materiais extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      valor_unt: Sequelize.DECIMAL(10,2)
    }, {
      sequelize,
      name: {
        singular: 'material',
        plural: 'materiais' 
      }
    })
  }
  static associate(models) {
    this.belongsTo(models.categorias, {
      foreignKey: 'categoria_id'
    })
    this.belongsTo(models.users, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.transacoes_entrada, {
      foreignKey: 'material_id'
    })
    this.hasMany(models.transacoes_saida, {
      foreignKey: 'material_id'
    })
    this.hasMany(models.estoque, {
      foreignKey: 'material_id'
    })
  }
}

export default materiais
