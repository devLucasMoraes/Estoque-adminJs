'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('destinos', [
      { "name": "SM 74", "fone": "", "user_id": "1", "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "SM 52", "fone": "", "user_id": "1", "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "SM 102", "fone": "", "user_id": "1", "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "NEY", "fone": "", "user_id": "1", "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "MAQUINA VERNIZ", "fone": "", "user_id": "1", "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "CTP", "fone": "", "user_id": "1", "createdAt": new Date(), "updatedAt": new Date() }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('destinos', null, {});
  }
};
