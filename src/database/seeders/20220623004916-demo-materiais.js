'use strict';
const materiaisJSON = [
  { "name": "ALCOOL ISOPROPILICO", "categorias_id": "22", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "ALPHA PLATE PLUS 5LT", "categorias_id": "1", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "ARAME 22", "categorias_id": "23", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "ARAME 24 0.60MM 2.2KG", "categorias_id": "23", "user_id": "3", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-30 20:47:46" },
  { "name": "ARAME 26", "categorias_id": "23", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "BOBINA PICOTADA 35X50CM 1.87KG", "categorias_id": "20", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "COLA BRANCA ALMAFLEX 50KG", "categorias_id": "24", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "CROMOS AMARELO EUROPA 2.5KG", "categorias_id": "7", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "CROMOS LARANJA MEDIO 2KG", "categorias_id": "4", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "CROMOS PRETO EUROPA 2KG", "categorias_id": "5", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "CROMOS PRETO SENEGAL 2.5KG", "categorias_id": "6", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "CROMOS VERMELHO REGAL 2KG", "categorias_id": "4", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "DUPLIFONT 1203 20LT", "categorias_id": "17", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "DUPLISOLV  2007 5LT", "categorias_id": "16", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "ENV SACO 24X34 BR CX/250 VIA BRASIL", "categorias_id": "3", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "ESTOPA", "categorias_id": "25", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "FINISHER 4 BAUME 2037 5LT", "categorias_id": "2", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "GLOBALCOR PRETO SENEGAL", "categorias_id": "6", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "Hxe 129 HXPOWDER 1KG", "categorias_id": "18", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "SUNCHEMICAL PRATA PANTONE", "categorias_id": "4", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "TOYO KING AMARELO 2.5KG", "categorias_id": "7", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "TOYO KING CIANO 2.5KG", "categorias_id": "8", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "TOYO KING CIANO 20KG", "categorias_id": "8", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "TOYO KING MAGENTA 2.5KG", "categorias_id": "9", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "TOYO KING PRETO 2.5KG", "categorias_id": "5", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "TRANFER G&A AMARELO 2KG", "categorias_id": "10", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "TRANSFER G&A MAGENTA 2KG", "categorias_id": "12", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "TRANSFER INOVARRE AZUL 2KG", "categorias_id": "11", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "TRAPO", "categorias_id": "26", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "UV 7301 CALANDRA FOSCO 1KG", "categorias_id": "19", "user_id": "1", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-06-23 00:00:00" },
  { "name": "VERNIZ UV-8073 CALANDRA BRILHO 5KG", "categorias_id": "19", "user_id": "3", "createdAt": "2022-06-23 00:00:00", "updatedAt": "2022-07-02 13:40:04" },
  { "name": "DUPLISTAUR 2208 18LT", "categorias_id": "16", "user_id": "3", "createdAt": "2022-06-30 20:45:48", "updatedAt": "2022-06-30 20:45:48" },
  { "name": "AQUAFONT 2013 20LT", "categorias_id": "17", "user_id": "3", "createdAt": "2022-06-30 20:46:28", "updatedAt": "2022-06-30 20:51:30" },
  { "name": "DUPLIBLOCK 1219 5KG", "categorias_id": "24", "user_id": "3", "createdAt": "2022-06-30 20:51:09", "updatedAt": "2022-06-30 20:51:09" },
  { "name": "WATERFAST BECA 20LT", "categorias_id": "17", "user_id": "3", "createdAt": "2022-06-30 20:52:53", "updatedAt": "2022-06-30 20:52:53" },
  { "name": "DUPLIPLATE CLEANER 1212 5LT", "categorias_id": "1", "user_id": "3", "createdAt": "2022-07-02 15:46:52", "updatedAt": "2022-07-02 15:46:52" },
  { "name": "FITA ADES 48X100 QUALITAPE 520 PT/05", "categorias_id": "27", "user_id": "3", "createdAt": "2022-07-08 20:16:38", "updatedAt": "2022-07-08 20:16:38" },
  { "name": "FITA DUPLAFACE 16X30 TR 430 PT/06", "categorias_id": "28", "user_id": "3", "createdAt": "2022-07-08 20:17:55", "updatedAt": "2022-07-08 20:17:55" }
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
