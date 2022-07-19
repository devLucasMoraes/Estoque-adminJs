'use strict';
import array from './_/destinos.js'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('destinos', array , {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('destinos', null, {});
  }
};
