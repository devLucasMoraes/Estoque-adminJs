'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transacoes_saidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qtd: {
        type: Sequelize.DECIMAL(10, 2)
      },
      valor: {
        type: Sequelize.DECIMAL(10, 2)
      },
      op: {
        type: Sequelize.STRING
      },
      obs: {
        type: Sequelize.TEXT
      },
      user_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'users', key: 'id'}, // referenciando chave estranjeira
        type: Sequelize.INTEGER
      },
      requisitante_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'requisitantes', key: 'id'}, // referenciando chave estranjeira
        type: Sequelize.INTEGER
      },
      destino_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'destinos', key: 'id'}, // referenciando chave estranjeira
        type: Sequelize.INTEGER
      },
      material_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'materiais', key: 'id'}, // referenciando chave estranjeira
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
    await queryInterface.dropTable('transacoes_saidas');
  }
};