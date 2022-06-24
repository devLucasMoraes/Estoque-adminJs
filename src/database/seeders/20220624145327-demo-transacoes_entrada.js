'use strict';
const transacoes_entradaJSON = [
  { "qtd": "440", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "1", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "5", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "2", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "8", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "3", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "5", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "4", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "1", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "5", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "1", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "6", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "50", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "7", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "5", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "8", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "10", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "9", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "70", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "10", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "12.5", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "11", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "8", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "12", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "60", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "13", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "10", "valor": "80.75", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "14", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "9000", "valor": "2235.6", "valor_frete": "0", "nfe": "29210829255826000183550000000063361817656006", "obs": "", "user_id": "2", "transportadora_id": "4", "fornecedora_id": "4", "material_id": "15", "createdAt": "2021-08-17", "updatedAt": "2021-08-17" },
  { "qtd": "50", "valor": "80", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "5", "fornecedora_id": "5", "material_id": "16", "createdAt": "2021-08-19", "updatedAt": "2021-08-19" },
  { "qtd": "5", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "17", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "10", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "18", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "53", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "19", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "1", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "20", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "135", "valor": "3666.87", "valor_frete": "0", "nfe": "35210711592963000148550010000836201522880571", "obs": "", "user_id": "1", "transportadora_id": "1", "fornecedora_id": "1", "material_id": "21", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "135", "valor": "3666.87", "valor_frete": "0", "nfe": "35210711592963000148550010000836201522880571", "obs": "", "user_id": "1", "transportadora_id": "1", "fornecedora_id": "1", "material_id": "21", "createdAt": "2021-08-02", "updatedAt": "2021-08-02" },
  { "qtd": "122.5", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "ACERTO DE ESTOQUE", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "21", "createdAt": "2021-08-02", "updatedAt": "2021-08-02" },
  { "qtd": "150", "valor": "4074.3", "valor_frete": "0", "nfe": "35210711592963000148550010000836201522880571", "obs": "", "user_id": "1", "transportadora_id": "1", "fornecedora_id": "1", "material_id": "22", "createdAt": "2021-08-02", "updatedAt": "2021-08-02" },
  { "qtd": "220", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "ACERTO DE ESTOQUE", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "23", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "30", "valor": "814.86", "valor_frete": "0", "nfe": "35210711592963000148550010000836201522880571", "obs": "", "user_id": "1", "transportadora_id": "1", "fornecedora_id": "1", "material_id": "24", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "312.5", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "ACERTO DE ESTOQUE", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "24", "createdAt": "2021-08-02", "updatedAt": "2021-08-02" },
  { "qtd": "70", "valor": "1837.96", "valor_frete": "0", "nfe": "35210711592963000148550010000836201522880571", "obs": "", "user_id": "1", "transportadora_id": "1", "fornecedora_id": "1", "material_id": "25", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "65", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "ACERTO DE ESTOQUE", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "25", "createdAt": "2021-08-02", "updatedAt": "2021-08-02" },
  { "qtd": "20", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "26", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "14", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "27", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "8", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "2", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "28", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "20", "valor": "160", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "3", "transportadora_id": "5", "fornecedora_id": "5", "material_id": "29", "createdAt": "2021-08-19", "updatedAt": "2021-08-19" },
  { "qtd": "1", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "30", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" },
  { "qtd": "100", "valor": "0", "valor_frete": "0", "nfe": "", "obs": "", "user_id": "1", "transportadora_id": "3", "fornecedora_id": "3", "material_id": "31", "createdAt": "2021-01-21", "updatedAt": "2021-01-21" }
]

const array = JSON.parse(JSON.stringify(transacoes_entradaJSON))

module.exports = {
  async up(queryInterface, Sequelize) {
/*     await queryInterface.bulkInsert('Transacoes_entradas', [
    { qtd: "60", valor: "0", valor_frete: "0", nfe: "", obs: "", user_id: "1", transportadora_id: "3", fornecedora_id: "3", material_id: "13", createdAt: "2021-01-21", updatedAt: "2021-01-21" },
    { qtd: "70", valor: "1837.96", valor_frete: "0", nfe: "35210711592963000148550010000836201522880571", obs: "", user_id: "1", transportadora_id: "1", fornecedora_id: "1", material_id: "25", createdAt: "2021-01-21", updatedAt: "2021-01-21" },
    ], { }); */
    await queryInterface.bulkInsert('Transacoes_entradas', array , { });
  },

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Transacoes_entradas', null, {});
}
};
