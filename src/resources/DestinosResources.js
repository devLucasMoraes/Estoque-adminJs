import Destinos from "../models/destinos.js";

export default {
    resource: Destinos,
    options: {
        parent: {
            icon: 'Location'
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