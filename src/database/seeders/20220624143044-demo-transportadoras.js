'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transportadoras', [
      { name: "SORA TRANSPORTES", fone1: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "D PAULA TRANSPORTES", fone1: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { name: "USUARIO E SEU PODER", fone1: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { name: "TOP CARGAS EXPRESS EIRELI", fone1: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { name: "ESTOPA ROCHA", fone1: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transportadoras', null, {});
  }
};
