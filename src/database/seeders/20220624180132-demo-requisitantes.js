'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Requisitantes', [
      { "name": "Rogerio", "fone": "", "user_id": 1, "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "Lazaro", "fone": "", "user_id": 1, "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "Vardo", "fone": "", "user_id": 1, "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "NEY", "fone": "", "user_id": 1, "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "ADRIANO", "fone": "", "user_id": 1, "createdAt": new Date(), "updatedAt": new Date() },
      { "name": "EDIE", "fone": "", "user_id": 1, "createdAt": new Date(), "updatedAt": new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Requisitantes', null, {});
  }
};
