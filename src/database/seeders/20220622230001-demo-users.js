'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Administrador',
        email: 'administrador@administrador.com',
        password_hash: '$12$ojeJcDgQo5vwdbI8UFl6HOE2O2HmD3tF.Fvu4XChHgkwjar8GpfpK',
        role: 'administrador',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Operador',
        email: 'operador@operador.com',
        password_hash: '$12$PBq85qxgsx1bA9tHT5ovF.CK67UBQn5/MvARa8w4UiKSXaDZlxIxm',
        role: 'operador',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lucas',
        email: 'lucas@lucas.com',
        password_hash: '$2b$12$mhX057TK9gQVqqnAKllSgu61rC95KLmIniN1.Z1F013wbpxb5boqO',
        role: 'administrador',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'gaby',
        email: 'gaby@gaby.com',
        password_hash: '$2b$12$QHtf2A0PvtRML4cd5NuHqetc/1wrj2TEojS474/h1Byf/rLP5XI8m',
        role: 'operador',
        status: 'ativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
