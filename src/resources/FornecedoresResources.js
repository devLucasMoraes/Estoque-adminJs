import Fornecedores from "../models/fornecedores";

export default {
    resource: Fornecedores,
    options: {
        parent: {
            icon: 'Partnership'
        },
        properties: {
            id: {
                position: 1
              },
              name: {
                position: 2,
                isRequired: true
              },
              razao_social: {
                position: 3,
                isRequired: true
              },
              cnpj: {
                position: 4,
                isRequired: true
              },
              fone1: {
                position: 5
              },
              fone2: {
                position: 6
              },
              user_id: {
                position: 7
              },
              createdAt: {
                position: 8
              },
              updatedAt: {
                position: 9
              }  
        }
    }

}