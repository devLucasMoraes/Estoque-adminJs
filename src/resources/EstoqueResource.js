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
      material_id: {
        position: 2
      },
      qtd_em_estoque: {
        position: 3
      },
      valor_total: {
        position: 4
      },
      createdAt: {
        position: 5
      },
      updatedAt: {
        position: 6
      },
    }
  }
}