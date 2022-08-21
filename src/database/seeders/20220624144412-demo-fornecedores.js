'use strict';
const fornecedoresJSON = [
  { "name": "CANOPUS QUIMICA", "razao_social": "CANOPUS IND E COM DE PRODUTOS", "cnpj": "68.958.487/0001-10", "fone1": "11 4093-8300", "fone2": "71 99985-8679", "user_id": "3", "createdAt": "2022-06-30 16:41:24", "updatedAt": "2022-07-08 17:11:47" },
  { "name": "EUROSTAR", "razao_social": "EUROSTAR PRODUTOS GRAFICOS E COMUNICACAO VISUAL LTDA", "cnpj": "13.761.290/0001-38", "fone1": "11 4156-2814", "fone2": "81 99507-3130", "user_id": "3", "createdAt": "2022-06-30 20:22:06", "updatedAt": "2022-07-08 17:09:23" },
  { "name": "ESTOPA ROCHA", "razao_social": "MARINALVA ROCHA AMORIM", "cnpj": "00.099.618/0001-50", "fone1": "75 98158-0036", "fone2": "75 98183-8284", "user_id": "3", "createdAt": "2022-07-08 17:07:48", "updatedAt": "2022-07-08 17:07:48" },
  { "name": "BAHIA PAPELARIA", "razao_social": "BAHIA DISTRIBUIDOR DE PAPELARIA LTDA", "cnpj": "05.195.608/0001-32", "fone1": "75 36235777", "fone2": "75 8149-3570", "user_id": "3", "createdAt": "2022-07-08 17:22:04", "updatedAt": "2022-07-08 17:22:04" },
  { "name": "TOYOINK", "razao_social": "TOYO INK BRASIL LTDA", "cnpj": "11.592.963./0001-48", "fone1": "11 29235100", "user_id": "3", "createdAt": "2022-07-08 17:22:04", "updatedAt": "2022-07-08 17:22:04" }
]

const array = JSON.parse(JSON.stringify(fornecedoresJSON))

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fornecedores', array, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fornecedores', null, {});
  }
};
