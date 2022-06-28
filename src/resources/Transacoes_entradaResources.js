import Transacoes_entrada from '../models/transacoes_entrada.js'
import { hasOperatorPermission, hasAdminPermission } from '../services/auth.js'


export default {
    resource: Transacoes_entrada,
    options: {
        navigation: {
            name: 'Controle de entradas',
            icon: 'ArrowDownLeft'
        },
        parent: {
            icon: 'ArrowDownLeft'
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
                isRequired: true,
                isTitle: true
            },
            qtd: {
                position: 3,
                isRequired: true

            },
            valor: {
                position: 4

            },
            fornecedora_id: {
                position: 5,
                isRequired: true
            },
            nfe: {
                position: 6

            },
            transportadora_id: {
                position: 7,
                isRequired: true

            },
            valor_frete: {
                position: 8

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

            }
        }
    }
}