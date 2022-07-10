'use strict';

const materiaisJSON = [
  {"name":"ALCOOL ISOPROPILICO","categorias_id":"22","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"ALPHA PLATE PLUS 5LT","categorias_id":"1","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"ARAME 22","categorias_id":"23","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"ARAME 24","categorias_id":"23","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"ARAME 26","categorias_id":"23","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"BOBINA PICOTADA 35X50CM 1,87KG","categorias_id":"20","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"COLA BRANCA ALMAFLEX 50KG","categorias_id":"24","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"CROMOS AMARELO EUROPA 2,5KG","categorias_id":"7","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"CROMOS LARANJA MEDIO 2KG","categorias_id":"4","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"CROMOS PRETO EUROPA 2KG","categorias_id":"5","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"CROMOS PRETO SENEGAL 2,5KG","categorias_id":"6","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"CROMOS VERMELHO REGAL 2KG","categorias_id":"4","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"DUPLIFONT 1203 20LT","categorias_id":"17","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"DUPLISOLV  2007 5LT","categorias_id":"16","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"ENV SACO 24X34 BR CX/250 VIA BRASIL","categorias_id":"3","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"ESTOPA","categorias_id":"25","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"FINISHER 4 BAUME 2037 5LT","categorias_id":"2","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"GLOBALCOR PRETO SENEGAL","categorias_id":"6","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"Hxe 129 HXPOWDER 1KG","categorias_id":"18","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"SUNCHEMICAL PRATA PANTONE","categorias_id":"4","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"TOYO KING AMARELO 2,5KG","categorias_id":"7","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"TOYO KING CIANO 2,5KG","categorias_id":"8","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"TOYO KING CIANO 20KG","categorias_id":"8","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"TOYO KING MAGENTA 2,5KG","categorias_id":"9","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"TOYO KING PRETO 2,5KG","categorias_id":"5","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"TRANFER G&A AMARELO 2KG","categorias_id":"10","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"TRANSFER G&A MAGENTA 2KG","categorias_id":"12","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"TRANSFER INOVARRE AZUL 2KG","categorias_id":"11","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"TRAPO","categorias_id":"26","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"UV 7301 CALANDRA FOSCO 1KG","categorias_id":"19","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"},
  {"name":"UV 8073 CALANDRA BRILHO 5KG","categorias_id":"19","user_id":"1","createdAt":"2022-06-23","updatedAt":"2022-06-23"}
  ]
  
  const array = JSON.parse(JSON.stringify(materiaisJSON))

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('materiais', array, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('materiais', null, {});
  }
};
