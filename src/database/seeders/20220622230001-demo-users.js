'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Administrador',
        email: 'administrador@administrador.com',
        password_hash: '123',
        role: 'administrador',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Operador',
        email: 'operador@operador.com',
        password_hash: '123',
        role: 'operador',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
