'use strict';
const array = [
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"5","destino_id":"5","material_id":"31","createdAt":"2021-01-21","updatedAt":"2021-01-21"},
  {"qtd":"100","valor":"0","op":"","obs":"TINTA COMPRADA COM JACKSON","user_id":"1","requisitante_id":"4","destino_id":"4","material_id":"21","createdAt":"2021-08-03","updatedAt":"2021-08-03"},
  {"qtd":"12.5","valor":"0","op":"","obs":"EMPRESTIMO PARA NEY","user_id":"1","requisitante_id":"4","destino_id":"4","material_id":"22","createdAt":"2021-08-03","updatedAt":"2021-08-03"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"3","destino_id":"3","material_id":"25","createdAt":"2021-08-03","updatedAt":"2021-08-03"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"21","createdAt":"2021-08-05","updatedAt":"2021-08-05"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"22","createdAt":"2021-08-05","updatedAt":"2021-08-05"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"2","destino_id":"2","material_id":"22","createdAt":"2021-08-05","updatedAt":"2021-08-05"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"3","destino_id":"3","material_id":"22","createdAt":"2021-08-05","updatedAt":"2021-08-05"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"2","destino_id":"2","material_id":"24","createdAt":"2021-08-05","updatedAt":"2021-08-05"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"3","destino_id":"3","material_id":"21","createdAt":"2021-08-06","updatedAt":"2021-08-06"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"21","createdAt":"2021-08-09","updatedAt":"2021-08-09"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"22","createdAt":"2021-08-09","updatedAt":"2021-08-09"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"24","createdAt":"2021-08-09","updatedAt":"2021-08-09"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"25","createdAt":"2021-08-09","updatedAt":"2021-08-09"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"21","createdAt":"2021-08-12","updatedAt":"2021-08-12"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"2","destino_id":"2","material_id":"21","createdAt":"2021-08-12","updatedAt":"2021-08-12"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"22","createdAt":"2021-08-12","updatedAt":"2021-08-12"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"24","createdAt":"2021-08-12","updatedAt":"2021-08-12"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"1","destino_id":"1","material_id":"25","createdAt":"2021-08-12","updatedAt":"2021-08-12"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"2","destino_id":"2","material_id":"25","createdAt":"2021-08-12","updatedAt":"2021-08-12"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"1","requisitante_id":"3","destino_id":"3","material_id":"21","createdAt":"2021-08-13","updatedAt":"2021-08-13"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"3","destino_id":"3","material_id":"25","createdAt":"2021-08-13","updatedAt":"2021-08-13"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"3","destino_id":"3","material_id":"22","createdAt":"2021-08-16","updatedAt":"2021-08-16"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"2","destino_id":"2","material_id":"1","createdAt":"2021-08-17","updatedAt":"2021-08-17"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"1","createdAt":"2021-08-17","updatedAt":"2021-08-17"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"2","destino_id":"2","material_id":"13","createdAt":"2021-08-17","updatedAt":"2021-08-17"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"2","material_id":"13","createdAt":"2021-08-17","updatedAt":"2021-08-17"},
  {"qtd":"1","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"2","destino_id":"2","material_id":"14","createdAt":"2021-08-17","updatedAt":"2021-08-17"},
  {"qtd":"1000","valor":"0","op":"130412","obs":"","user_id":"2","requisitante_id":"2","destino_id":"2","material_id":"15","createdAt":"2021-08-17","updatedAt":"2021-08-17"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"5","destino_id":"5","material_id":"31","createdAt":"2021-08-17","updatedAt":"2021-08-17"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"3","destino_id":"3","material_id":"1","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"1","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"3","destino_id":"3","material_id":"14","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"4","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"3","destino_id":"3","material_id":"16","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"1","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"3","destino_id":"3","material_id":"17","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"21","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"3","destino_id":"3","material_id":"21","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"22","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"24","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"3","destino_id":"3","material_id":"24","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"25","createdAt":"2021-08-18","updatedAt":"2021-08-18"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"1","createdAt":"2021-08-19","updatedAt":"2021-08-19"},
  {"qtd":"5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"13","createdAt":"2021-08-19","updatedAt":"2021-08-19"},
  {"qtd":"2","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"14","createdAt":"2021-08-19","updatedAt":"2021-08-19"},
  {"qtd":"2","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"16","createdAt":"2021-08-19","updatedAt":"2021-08-19"},
  {"qtd":"1","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"17","createdAt":"2021-08-19","updatedAt":"2021-08-19"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"22","createdAt":"2021-08-19","updatedAt":"2021-08-19"},
  {"qtd":"2.5","valor":"0","op":"","obs":"","user_id":"2","requisitante_id":"1","destino_id":"1","material_id":"24","createdAt":"2021-08-19","updatedAt":"2021-08-19"}
  ]
  
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Transacoes_saidas', array , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transacoes_saidas', null, {});
  }
};
