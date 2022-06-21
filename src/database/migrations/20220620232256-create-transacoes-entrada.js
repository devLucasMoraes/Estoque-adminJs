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
        allowNull: false,
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
      user_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'Users', key: 'id'}, // referenciando chave estranjeira
        type: Sequelize.INTEGER
      },
      transportadora_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'Transportadoras', key: 'id'}, // referenciando chave estranjeira
        type: Sequelize.INTEGER
      },
      fornecedora_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'Fornecedores', key: 'id'}, // referenciando chave estranjeira
        type: Sequelize.INTEGER
      },
      material_id: {
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        references: {model: 'Materiais', key: 'id'}, // referenciando chave estranjeira
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
    await queryInterface.dropTable('Transacoes_entradas');
  }
};