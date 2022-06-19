import Categorias from '../models/categorias.js'

export default {
    resource: Categorias,
    options: {
        parent: {
            icon: 'Category'
        },
        properties: {
            id: {
                position: 1
              },
              name: {
                position: 2,
                isRequired: true
              },
              und_medida: {
                position: 3,
                isRequired: true
              },
              estoque_min: {
                position: 4
              },
              user_id: {
                position: 5
              },
              createdAt: {
                position: 6
              },
              updatedAt: {
                position: 7
              }
        }
    }
}