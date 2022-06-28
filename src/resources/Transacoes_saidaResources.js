import Transacoes_saida from '../models/transacoes_saida.js'
import { hasOperatorPermission, hasAdminPermission } from '../services/auth.js'


export default {
    resource: Transacoes_saida,
    options: {
        navigation: {
            name: 'Controle de saidas',
            icon: 'ArrowUpRight'
          },
        parent: {
            icon: 'ArrowUpRight'
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
                position: 2,
                isTitle: true,
                isRequired: true

            },
            qtd: {
                position: 3,
                isRequired: true,

            },
            valor: {
                position: 4,
                isDisabled: true,

            },
            requisitante_id: {
                position: 5,
                isRequired: true

            },
            op: {
                position: 6

            },
            destino_id: {
                position: 7,
                isRequired: true

            },
            obs: {
                position: 8

            },
            user_id: {
                position: 9

            },
            createdAt: {
                position: 10

            },
            updatedAt: {
                position: 11

            }
        }
    }
}