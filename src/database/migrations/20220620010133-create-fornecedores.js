'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fornecedores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      razao_social: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.STRING
      },
      fone1: {
        type: Sequelize.STRING
      },
      fone2: {
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'users', key: 'id'}, // referenciando chave estranjeira
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
    await queryInterface.dropTable('fornecedores');
  }
};