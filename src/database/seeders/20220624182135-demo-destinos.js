'use strict';
const destinosJson = [
  { "name": "MAQUINA DE VERNIZ", "fone": "NULL", "user_id": "3", "createdAt": "2022-06-30 16:51:13", "updatedAt": "2022-06-30 16:51:13" },
  { "name": "SM 52", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-02 12:48:19", "updatedAt": "2022-07-02 12:48:19" },
  { "name": "SM 74", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-02 12:48:35", "updatedAt": "2022-07-02 12:48:35" },
  { "name": "SM 102", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-02 12:48:47", "updatedAt": "2022-07-02 12:48:47" },
  { "name": "Transfer SM 102", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-02 12:49:28", "updatedAt": "2022-07-08 16:27:12" },
  { "name": "BANHEIRA SM 52", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-02 13:01:20", "updatedAt": "2022-07-02 13:01:20" },
  { "name": "BANHEIRA SM 74/SM 102", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-02 13:01:28", "updatedAt": "2022-07-02 13:01:45" },
  { "name": "BANHEIRA SM 102 TRANSFER", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-02 13:01:59", "updatedAt": "2022-07-02 13:01:59" },
  { "name": "MAQUINA DE CORTE E VINCO", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-02 14:02:04", "updatedAt": "2022-07-02 14:02:04" },
  { "name": "CTP", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-05 20:45:00", "updatedAt": "2022-07-05 20:45:00" },
  { "name": "MILLER", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-05 21:08:36", "updatedAt": "2022-07-05 21:08:36" },
  { "name": "ACABAMENTO", "fone": "NULL", "user_id": "3", "createdAt": "2022-07-08 16:02:11", "updatedAt": "2022-07-08 16:02:11" }
]

const array = JSON.parse(JSON.stringify(destinosJson))

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('destinos', array, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('destinos', null, {});
  }
};
