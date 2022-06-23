'use strict';

const materiaisJSON = [
  { "name": "ALCOOL ISOPROPILICO", "categorias_id": "22", "user_id": "1" },
  { "name": "ARAME 22", "categorias_id": "23", "user_id": "1" },
  { "name": "ARAME 24", "categorias_id": "23", "user_id": "1" },
  { "name": "ARAME 26", "categorias_id": "23", "user_id": "1" },
  { "name": "BOPP BRILHO 0,52X150 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,32X250 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 25X2.000 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 48X2.000 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 49,5X2.000 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 68X2.000 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP MATTE 11X50 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "PAPEL METAL PRATA 11X50 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,44X1.500 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,33X1.775 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,22X1.775 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,66X2.162 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,48X2.055 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,48X2.250 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,48X2.180 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,48X2.050 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "BOPP FOSCO 0,68X1.775 MT", "categorias_id": "20", "user_id": "1" },
  { "name": "60X74 MM 50 FLS", "categorias_id": "15", "user_id": "1" },
  { "name": "COLA BRANCA ALMAFLEX 50KG", "categorias_id": "24", "user_id": "1" },
  { "name": "COLA BRANCA GLINORTE 1KG", "categorias_id": "24", "user_id": "1" },
  { "name": "ENV SACO 24X34 BR CX/250 VIA BRASIL", "categorias_id": "3", "user_id": "1" },
  { "name": "DUPLIDEX 1220 5 LT", "categorias_id": "2", "user_id": "1" },
  { "name": "FINISHER 4 BAUME 2037 5LT", "categorias_id": "2", "user_id": "1" },
  { "name": "ALPHA PLATE PLUS 5LT", "categorias_id": "1", "user_id": "1" },
  { "name": "Hxe 108 HX MAX 5LT", "categorias_id": "1", "user_id": "1" },
  { "name": "Hxe 129 HXPOWDER 1KG", "categorias_id": "18", "user_id": "1" },
  { "name": "DUPLISOLV SR 1207 18LT", "categorias_id": "16", "user_id": "1" },
  { "name": "DUPLISOLV  2007 5LT", "categorias_id": "16", "user_id": "1" },
  { "name": "DUPLISTAUR 2208 18LT", "categorias_id": "16", "user_id": "1" },
  { "name": "REVELADOR MILLION HP 20L", "categorias_id": "21", "user_id": "1" },
  { "name": "DUPLIFONT 1203 20LT", "categorias_id": "17", "user_id": "1" },
  { "name": "EGGOFOUNT 110 10LT", "categorias_id": "17", "user_id": "1" },
  { "name": "TOYO KING CIANO 2,5KG", "categorias_id": "8", "user_id": "1" },
  { "name": "TOYO KING CIANO 20KG", "categorias_id": "8", "user_id": "1" },
  { "name": "CROMOS PRETO EUROPA 2KG", "categorias_id": "5", "user_id": "1" },
  { "name": "TOYO KING PRETO 2,5KG", "categorias_id": "5", "user_id": "1" },
  { "name": "TOYO KING MAGENTA 2,5KG", "categorias_id": "9", "user_id": "1" },
  { "name": "CROMOS AZUL REI", "categorias_id": "4", "user_id": "1" },
  { "name": "CROMOS LARANJA MEDIO 2KG", "categorias_id": "4", "user_id": "1" },
  { "name": "SUNCHEMICAL PRATA PANTONE", "categorias_id": "4", "user_id": "1" },
  { "name": "CROMOS VERMELHO REGAL 2KG", "categorias_id": "4", "user_id": "2" },
  { "name": "CROMOS PRETO SENEGAL 2,5KG", "categorias_id": "6", "user_id": "1" },
  { "name": "GLOBALCOR PRETO SENEGAL", "categorias_id": "6", "user_id": "1" },
  { "name": "TRANFER G&A AMARELO 2KG", "categorias_id": "10", "user_id": "1" },
  { "name": "TRANSFER G&A AZUL 2KG", "categorias_id": "11", "user_id": "2" },
  { "name": "TRANSFER INOVARRE AZUL 2KG", "categorias_id": "11", "user_id": "2" },
  { "name": "TRANSFER G&A MAGENTA 2KG", "categorias_id": "12", "user_id": "2" },
  { "name": "TRANSFER G&A PRETO 2KG", "categorias_id": "13", "user_id": "2" },
  { "name": "TOYO KING AMARELO 2,5KG", "categorias_id": "7", "user_id": "1" },
  { "name": "CROMOS AMARELO EUROPA 2,5KG", "categorias_id": "7", "user_id": "2" },
  { "name": "UV 8073 CALANDRA BRILHO 5KG", "categorias_id": "19", "user_id": "1" },
  { "name": "UV 7301 CALANDRA FOSCO 1KG", "categorias_id": "19", "user_id": "1" },
  { "name": "UV 7017/16 CALANDRA 5KG", "categorias_id": "19", "user_id": "1" }
]

const array = JSON.parse(JSON.stringify(materiaisJSON))

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Materiais', array , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Materiais', null, {});
  }
};
