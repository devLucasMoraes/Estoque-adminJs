'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categorias', [

      {
        name:"LIMPADOR DE CHAPA",
        und_medida:"LT",
        estoque_min:20,
        user_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {name:"GOMA",und_medida:"LT",estoque_min:20,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"ENVELOPES",und_medida:"UND",estoque_min:0,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS PANTONE",und_medida:"KG",estoque_min:0,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS KEY",und_medida:"KG",estoque_min:100,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS SENEGAL",und_medida:"KG",estoque_min:0,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS YELLOW",und_medida:"KG",estoque_min:100,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS CYANO",und_medida:"KG",estoque_min:100,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS MAGENTA",und_medida:"KG",estoque_min:100,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS TRANSFER AMARELO",und_medida:"KG",estoque_min:20,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS TRANSFER AZUL",und_medida:"KG",estoque_min:20,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS TRANSFER MAGENTA",und_medida:"KG",estoque_min:20,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"TINTAS TRANSFER PRETO",und_medida:"KG",estoque_min:20,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"PAPEL",und_medida:"PCT",estoque_min:0,user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {name:"CHAPA F2",und_medida:"UND",estoque_min:100,user_id:"2",createdAt:new Date(),updatedAt:new Date()},
      {name:"RESTAURADOR SOLVENTE",und_medida:"LT",estoque_min:36,user_id:"2",createdAt:new Date(),updatedAt:new Date()},
      {name:"SOLUCAO FONTE",und_medida:"LT",estoque_min:20,user_id:"2",createdAt:new Date(),updatedAt:new Date()},
      {name:"PO GRAFICO",und_medida:"KG",estoque_min:10,user_id:"2",createdAt:new Date(),updatedAt:new Date()},
      {name:"VERNIZ",und_medida:"KG",estoque_min:20,user_id:"2",createdAt:new Date(),updatedAt:new Date()},
      {name:"BOBINAS",und_medida:"UND",estoque_min:0,user_id:"2",createdAt:new Date(),updatedAt:new Date()},
      {name:"REVELADOR",und_medida:"LT",estoque_min:60,user_id:"2",createdAt:new Date(),updatedAt:new Date()},
      {name:"ALCOOL",und_medida:"LT",estoque_min:200,user_id:"2",createdAt:new Date(),updatedAt:new Date()},
      {name:"ARAMES",und_medida:"UND",estoque_min:1,user_id:"2",createdAt:new Date(),updatedAt:new Date()},
      {name:"COLAS",und_medida:"KG",estoque_min:10,user_id:"2",createdAt:new Date(),updatedAt:new Date()},

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
