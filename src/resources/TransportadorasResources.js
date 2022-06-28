import Transportadoras from "../models/transportadoras"
import { hasOperatorPermission, hasAdminPermission } from '../services/auth.js'


export default {
  resource: Transportadoras,
  options: {
    navigation: {
      name: 'Controle de entradas',
      icon: 'ArrowDownLeft'
    },
    parent: {
      icon: 'DeliveryTruck'
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
      },
      cnpj: {
        position: 4,
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