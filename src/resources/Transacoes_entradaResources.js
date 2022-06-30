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
            data_de_recebimento: {
                position: 2
    
            },
            material_id: {
                position: 3,
                isRequired: true,
                isTitle: true
            },
            qtd: {
                position: 4,
                isRequired: true

            },
            valor: {
                position: 5

            },
            fornecedora_id: {
                position: 6,
                isRequired: true
            },
            nfe: {
                position: 7

            },
            transportadora_id: {
                position: 8,
                isRequired: true

            },
            valor_frete: {
                position: 9

            },
            obs: {
                position: 10

            },
            user_id: {
                position: 11

            },
            createdAt: {
                position: 12

            },
            updatedAt: {
                position: 13

            },
        }
    }
}