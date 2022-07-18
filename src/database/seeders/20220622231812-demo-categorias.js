'use strict';
import categoriasArray from './_/categorias.js'


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', categoriasArray , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
