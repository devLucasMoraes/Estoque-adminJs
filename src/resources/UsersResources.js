import Users from '../models/users.js'
import { hasAdminPermission } from '../services/auth.js'
export default {
    resource: Users,
    options: {
        parent: {
            icon: 'User'
        },
        actions: {
            list: {
                isAccessible: function({currentAdmin}) {
                    return hasAdminPermission(currentAdmin)
                }
            },
            resetPassword: {
                actionType: 'record',
                icon: 'Password',
                handler: async (request, response, context) => {
                    return {
                        record: context.record.toJson(),
                    };
                },
            },
        },
        properties: {
            id: {
                position: 1,
            },
            name: {
                position: 2,
                isRequired: true
            },
            email: {
                position: 3,
                isRequired: true
            },
            password: {
                position: 4,
                isVisible: { list: false, filter: false, show: false, edit: true }
            },
            role: {
                position: 5,
                isRequired: true,
                /*             availableValues: [
                                { value: 'admin', label: 'Administrador' },
                                { value: 'manager', label: 'Gerente' },
                                { value: 'developer', label: 'Desenvolvedor' },
                            ] */
            },
            status: {
                position: 6,
                isRequired: true,
                /*             availableValues: [
                                { value: 'active', label: 'Ativo' },
                                { value: 'archived', label: 'Arquivado' }
                            ] */
            },
            createdAt: {
                position: 7,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            updatedAt: {
                position: 8,
                isVisible: { list: true, filter: true, show: true, edit: false }
            },
            password_hash: {
                isVisible: false
            }
        }
    },
}