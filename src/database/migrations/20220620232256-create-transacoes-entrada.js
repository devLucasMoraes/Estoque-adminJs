'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transacoes_entradas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qtd: {
        type: Sequelize.DECIMAL
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      valor_frete: {
        type: Sequelize.DECIMAL
      },
      nfe: {
        type: Sequelize.STRING
      },
      obs: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Transacoes_entradas');
  }
};