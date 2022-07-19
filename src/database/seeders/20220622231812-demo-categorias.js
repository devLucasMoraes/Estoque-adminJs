'use strict';
import array from './_/categorias.js'


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', array , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
