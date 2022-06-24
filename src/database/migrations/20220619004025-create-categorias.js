'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categorias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      und_medida: {
        allowNull: false,
        type: Sequelize.STRING
      },
      estoque_min: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      user_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'Users', key: 'id'}, // referenciando chave estranjeira
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Categorias');
  }
};