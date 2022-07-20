'use strict';
const transacoes_entradasJSON = [
  { "qtd": "100.00", "valor": "100.00", "valor_frete": "100.00", "nfe": "3522 0668 9584 8700 0153 5500 2000 0973 9919 3337 6830", "obs": "", "user_id": "3", "transportadora_id": "1", "fornecedora_id": "1", "material_id": "31", "createdAt": "2022-06-30 16:46:20", "updatedAt": "2022-07-02 15:21:52", "data_de_recebimento": "2022-06-23 11:00:00" },
  { "qtd": "20.00", "valor": "144.00", "valor_frete": "NULL", "nfe": "3522 0613 7612 9000 0138 5500 1000 1211 7616 8114 3774", "obs": "", "user_id": "3", "transportadora_id": "1", "fornecedora_id": "2", "material_id": "17", "createdAt": "2022-06-30 20:56:36", "updatedAt": "2022-06-30 20:56:36", "data_de_recebimento": "NULL" },
  { "qtd": "54.00", "valor": "630.00", "valor_frete": "NULL", "nfe": "3522 0613 7612 9000 0138 5500 1000 1211 7616 8114 3774", "obs": "NULL", "user_id": "3", "transportadora_id": "1", "fornecedora_id": "2", "material_id": "32", "createdAt": "2022-06-30 20:57:46", "updatedAt": "2022-06-30 20:57:46", "data_de_recebimento": "NULL" },
  { "qtd": "40.00", "valor": "370.77", "valor_frete": "NULL", "nfe": "3522 0613 7612 9000 0138 5500 1000 1211 7616 8114 3774", "obs": "", "user_id": "3", "transportadora_id": "1", "fornecedora_id": "2", "material_id": "33", "createdAt": "2022-06-30 20:59:07", "updatedAt": "2022-06-30 20:59:07", "data_de_recebimento": "NULL" },
  { "qtd": "2.00", "valor": "182.00", "valor_frete": "NULL", "nfe": "3522 0613 7612 9000 0138 5500 1000 1211 7616 8114 3774", "obs": "NULL", "user_id": "3", "transportadora_id": "1", "fornecedora_id": "2", "material_id": "4", "createdAt": "2022-06-30 21:00:37", "updatedAt": "2022-06-30 21:00:37", "data_de_recebimento": "NULL" },
  { "qtd": "10.00", "valor": "182.00", "valor_frete": "NULL", "nfe": "3522 0613 7612 9000 0138 5500 1000 1211 7616 8114 3774", "obs": "", "user_id": "3", "transportadora_id": "1", "fornecedora_id": "2", "material_id": "34", "createdAt": "2022-06-30 21:03:13", "updatedAt": "2022-06-30 21:03:13", "data_de_recebimento": "NULL" },
  { "qtd": "20.00", "valor": "560.49", "valor_frete": "NULL", "nfe": "3522 0613 7612 9000 0138 5500 1000 1211 7616 8114 3774", "obs": "", "user_id": "3", "transportadora_id": "1", "fornecedora_id": "2", "material_id": "35", "createdAt": "2022-06-30 21:05:53", "updatedAt": "2022-06-30 21:05:53", "data_de_recebimento": "NULL" },
  { "qtd": "20.00", "valor": "230.48", "valor_frete": "NULL", "nfe": "NULL", "obs": "", "user_id": "3", "transportadora_id": "1", "fornecedora_id": "2", "material_id": "36", "createdAt": "2022-07-02 16:33:56", "updatedAt": "2022-07-02 16:41:51", "data_de_recebimento": "NULL" },
  { "qtd": "50.00", "valor": "90.00", "valor_frete": "0.00", "nfe": "15305", "obs": "", "user_id": "3", "transportadora_id": "2", "fornecedora_id": "3", "material_id": "16", "createdAt": "2022-07-08 17:13:13", "updatedAt": "2022-07-08 17:13:49", "data_de_recebimento": "2022-07-05 11:00:00" },
  { "qtd": "20.00", "valor": "180.00", "valor_frete": "0.00", "nfe": "15305", "obs": "", "user_id": "3", "transportadora_id": "2", "fornecedora_id": "3", "material_id": "29", "createdAt": "2022-07-08 17:15:19", "updatedAt": "2022-07-08 17:15:19", "data_de_recebimento": "2022-07-08 11:00:00" },
  { "qtd": "2000.00", "valor": "521.76", "valor_frete": "0.00", "nfe": "29220705195608000132550010000510541071420508", "obs": "", "user_id": "3", "transportadora_id": "3", "fornecedora_id": "4", "material_id": "15", "createdAt": "2022-07-08 17:47:12", "updatedAt": "2022-07-08 17:47:12", "data_de_recebimento": "2022-07-08 17:00:00" },
  { "qtd": "45.00", "valor": "419.85", "valor_frete": "0.00", "nfe": "29220705195608000132550010000510541071420508", "obs": "", "user_id": "3", "transportadora_id": "3", "fornecedora_id": "4", "material_id": "37", "createdAt": "2022-07-08 20:19:32", "updatedAt": "2022-07-08 20:19:32", "data_de_recebimento": "2022-07-08 11:00:00" },
  { "qtd": "6.00", "valor": "29.11", "valor_frete": "0.00", "nfe": "NULL", "obs": "NULL", "user_id": "3", "transportadora_id": "3", "fornecedora_id": "4", "material_id": "38", "createdAt": "2022-07-08 20:29:30", "updatedAt": "2022-07-08 20:29:30", "data_de_recebimento": "2022-07-08 11:00:00" }
]

const array = JSON.parse(JSON.stringify(transacoes_entradasJSON))

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transacoes_entradas', array, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transacoes_entradas', null, {});
  }
};
