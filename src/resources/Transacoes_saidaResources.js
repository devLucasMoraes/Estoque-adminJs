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
            data_de_retirada: {
                position: 2
    
            },
            material_id: {
                position: 3,
                isTitle: true,
                isRequired: true

            },
            qtd: {
                position: 4,
                isRequired: true,

            },
            valor: {
                position: 5,
                isDisabled: true,

            },
            requisitante_id: {
                position: 6,
                isRequired: true

            },
            op: {
                position: 7

            },
            destino_id: {
                position: 8,
                isRequired: true

            },
            obs: {
                position: 9

            },
            user_id: {
                position: 10

            },
            createdAt: {
                position: 11

            },
            updatedAt: {
                position: 12

            },
        }
    }
}