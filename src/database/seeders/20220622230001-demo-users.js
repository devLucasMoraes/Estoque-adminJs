'use strict';
import usersArray from './_/users.js'

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',usersArray, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
