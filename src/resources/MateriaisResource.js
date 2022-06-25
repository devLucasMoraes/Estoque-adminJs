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