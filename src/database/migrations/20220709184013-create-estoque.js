'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estoques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      material_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'materiais', key: 'id'}, // referenciando chave estranjeira
        type: Sequelize.INTEGER
      },
      qtd_em_estoque: {
        type: Sequelize.DECIMAL(10,2)
      },
      valor_total: {
        type: Sequelize.DECIMAL(10,2)
      },
      abaixo_min: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estoques');
  }
};