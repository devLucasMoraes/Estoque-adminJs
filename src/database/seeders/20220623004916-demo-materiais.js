'use strict';

import array from './_/materiais.js'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('materiais', array, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('materiais', null, {});
  }
};
