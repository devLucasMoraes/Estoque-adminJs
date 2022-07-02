import Categorias from '../models/categorias.js'
import { hasOperatorPermission, hasAdminPermission } from '../services/auth.js'

export default {
  resource: Categorias,
  options: {
    parent: {
      icon: 'Category'
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
      name: {
        position: 2,
        isRequired: true
      },
      estoque_min: {
        position: 3,
        isRequired: true
      },
      und_medida: {
        position: 4,
        isRequired: true
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