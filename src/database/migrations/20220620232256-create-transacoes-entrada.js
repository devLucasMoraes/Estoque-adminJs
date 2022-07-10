'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transacoes_entradas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qtd: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      valor: {
        type: Sequelize.DECIMAL(10, 2)
      },
      valor_frete: {
        type: Sequelize.DECIMAL(10, 2)
      },
      nfe: {
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
      transportadora_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'transportadoras', key: 'id'}, // referenciando chave estranjeira
        type: Sequelize.INTEGER
      },
      fornecedora_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'fornecedores', key: 'id'}, // referenciando chave estranjeira
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
    await queryInterface.dropTable('transacoes_entradas');
  }
};