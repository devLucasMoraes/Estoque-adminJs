'use strict';
import array from "./_/transportadoras.js"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transportadoras', array , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transportadoras', null, {});
  }
};
