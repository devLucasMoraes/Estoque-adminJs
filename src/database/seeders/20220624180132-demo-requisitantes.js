'use strict';
import array from "./_/requisitantes.js"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('requisitantes', array , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('requisitantes', null, {});
  }
};
