'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING

      },
      password_hash: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM('administrador', 'operador'), // campo de tipo STRING que so suporta valores fechados
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('ativo', 'desativado'), // campo de tipo STRING que so suporta valores fechados
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
    await queryInterface.dropTable('Users');
  }
};