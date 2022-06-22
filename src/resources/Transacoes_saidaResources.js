import Transacoes_saida from '../models/transacoes_saida.js'

export default {
    resource: Transacoes_saida,
    options: {
        parent: {
            icon: 'ArrowUpRight'
        },
        properties: {
            id: {
                position: 1
            },
            material_id: {
                position: 2,
                isRequired: true
                
            },
            qtd: {
                position: 3,
                isRequired: true
                
            },
            valor: {
                position: 4
                
            },
            requisitante_id: {
                position: 5
                
            },
            op: {
                position: 6
                
            },
            destino_id: {
                position: 7
                
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