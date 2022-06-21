import Materiais from '../models/materiais.js'

export default {
    resource: Materiais,
    options: {
        parent: {
            icon: 'Barcode'
        },
        properties: {
            id: {
                position: 1
              },
              name: {
                position: 2,
                isRequired: true
              },
              categorias_id: {
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