'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Materiais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      categorias_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: { model: 'Categorias', key: 'id'},
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: { model: 'Users', key: 'id'},
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
    await queryInterface.dropTable('Materiais');
  }
};