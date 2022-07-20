'use strict';
import array from "./_/transacoes_saidas.js"
  
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('transacoes_saidas', array , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transacoes_saidas', null, {});
  }
};
