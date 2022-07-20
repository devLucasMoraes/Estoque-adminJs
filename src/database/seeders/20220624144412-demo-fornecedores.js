'use strict';
import array from "./_/fornecedores.js"

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fornecedores', array , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fornecedores', null, {});
  }
};
