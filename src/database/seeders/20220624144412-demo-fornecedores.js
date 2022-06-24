'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fornecedores', [
      { name: "TOYOINK", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "SUZANO", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { name: "USUARIO E SEU PODER", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { name: "VIA BRASIL EDITORA GRAFICA LTDA", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  },
      { name: "ESTOPA ROCHA", fone: "99999999999", user_id: 1, createdAt: new Date(), updatedAt: new Date()  }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fornecedores', null, {});
  }
};
