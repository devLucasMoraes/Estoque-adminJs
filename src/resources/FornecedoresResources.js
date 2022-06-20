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
              fone: {
                position: 3
              },
              user_id: {
                position: 4
              },
              createdAt: {
                position: 5
              },
              updatedAt: {
                position: 6
              }  
        }
    }

}