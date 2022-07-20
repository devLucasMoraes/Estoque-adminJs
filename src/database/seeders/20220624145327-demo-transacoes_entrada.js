'use strict';
import array from "./_/transacoes_entradas.js"

module.exports = {
  async up(queryInterface, Sequelize) {
/*     await queryInterface.bulkInsert('Transacoes_entradas', [
    { qtd: "60", valor: "0", valor_frete: "0", nfe: "", obs: "", user_id: "1", transportadora_id: "3", fornecedora_id: "3", material_id: "13", createdAt: "2021-01-21", updatedAt: "2021-01-21" },
    { qtd: "70", valor: "1837.96", valor_frete: "0", nfe: "35210711592963000148550010000836201522880571", obs: "", user_id: "1", transportadora_id: "1", fornecedora_id: "1", material_id: "25", createdAt: "2021-01-21", updatedAt: "2021-01-21" },
    ], { }); */
    await queryInterface.bulkInsert('transacoes_entradas', array , { });
  },

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('transacoes_entradas', null, {});
}
};
