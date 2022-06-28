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
      razao_social: {
        position: 3,
        isRequired: true
      },
      cnpj: {
        position: 4,
        isRequired: true
      },
      fone1: {
        position: 5
      },
      fone2: {
        position: 6
      },
      user_id: {
        position: 7
      },
      createdAt: {
        position: 8
      },
      updatedAt: {
        position: 9
      }

    }
  }
}