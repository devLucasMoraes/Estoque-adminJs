'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transportadoras', [
      { name: "SORA TRANSPORTES", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "D PAULA TRANSPORTES", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { name: "USUARIO E SEU PODER", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { name: "TOP CARGAS EXPRESS EIRELI", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { name: "ESTOPA ROCHA", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transportadoras', null, {});
  }
};
