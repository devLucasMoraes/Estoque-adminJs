import Materiais from '../models/materiais.js'
import { hasOperatorPermission, hasAdminPermission } from '../services/auth.js'


export default {
  resource: Materiais,
  options: {
    parent: {
      icon: 'Barcode'
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
      name: {
        position: 3,
        isDisabled: true,
      },
      categorias_id: {
        position: 3,
        isRequired: true
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