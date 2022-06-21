import Requisitantes from "../models/requisitantes.js";

export default {
    resource: Requisitantes,
    options: {
        parent: {
            icon: 'Need'
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