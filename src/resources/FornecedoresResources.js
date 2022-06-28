import Fornecedores from "../models/fornecedores";
import { hasOperatorPermission, hasAdminPermission } from '../services/auth.js'


export default {
  resource: Fornecedores,
  options: {
    navigation: {
      name: 'Controle de entradas',
      icon: 'ArrowDownLeft'
    },
    parent: {
      icon: 'Partnership'
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