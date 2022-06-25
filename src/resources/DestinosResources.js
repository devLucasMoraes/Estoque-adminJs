import Destinos from "../models/destinos.js";
import { hasOperatorPermission, hasAdminPermission } from '../services/auth.js'


export default {
  resource: Destinos,
  options: {
    navigation: {
      name: 'Controle de saidas',
      icon: 'ArrowUpRight'
    },
    parent: {
      icon: 'Location'
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