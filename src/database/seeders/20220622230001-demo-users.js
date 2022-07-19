'use strict';
import array from './_/users.js'

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',array, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
