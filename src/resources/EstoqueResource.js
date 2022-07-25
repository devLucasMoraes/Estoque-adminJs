import Estoque from '../models/estoque.js'
import { hasOperatorPermission, hasAdminPermission } from '../services/auth.js'


export default {
  resource: Estoque,
  options: {
    parent: {
      icon: 'Box'
    },
    actions: {    
      new: {
        isAccessible: function ({ currentAdmin }) {
          return hasOperatorPermission(currentAdmin)
        }
      },
      edit: {
        isAccessible: function ({ currentAdmin }) {
          return hasOperatorPermission(currentAdmin)
        }
      },
      delete: {
        isAccessible: function ({ currentAdmin }) {
          return hasAdminPermission(currentAdmin)
        }
      }
    },
    sort: {
      direction: 'desc',
      sortBy: 'id'
  },
    properties: {
      id: {
        position: 1
      },
      categoria_id: {
        position: 2
      },
      material_id: {
        position: 3
      },
      qtd_em_estoque: {
        position: 4
      },
      valor_total: {
        position: 5
      },
      abaixo_min: {
        position: 6
      },
      createdAt: {
        position: 7
      },
      updatedAt: {
        position: 8
      },
    }
  }
}