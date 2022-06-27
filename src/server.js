import 'dotenv/config'
import './database'

import User from './models/users.js'

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import express from 'express'

import UsersResource from './resources/UsersResources.js'
import CategoriasResources from './resources/CategoriasResources'
import MateriaisResource from './resources/MateriaisResource'
import FornecedoresResources from './resources/FornecedoresResources'
import TransportadorasResources from './resources/TransportadorasResources'
import Transacoes_entradaResources from './resources/Transacoes_entradaResources'
import DestinosResources from './resources/DestinosResources'
import RequisitantesResources from './resources/RequisitantesResources'
import Transacoes_saidaResources from './resources/Transacoes_saidaResources'

import BrandingOptions from './theme/index.js'
import locales from './locales/index.js'

AdminJS.registerAdapter(AdminJSSequelize)

const app = express()

const adminjs = new AdminJS({
    databases: [],
    rootPath: '/',
    resources: [UsersResource, 
        CategoriasResources, 
        MateriaisResource, 
        FornecedoresResources, 
        TransportadorasResources, 
        Transacoes_entradaResources,
        DestinosResources,
        RequisitantesResources,
        Transacoes_saidaResources
    
    ],
    branding: BrandingOptions,
    ...locales,
})

//const router = AdminJSExpress.buildRouter(adminjs)
const router = AdminJSExpress.buildAuthenticatedRouter(adminjs, {
    authenticate: async (email, password) => {
        const user = await User.findOne({ where: { email }})

        if (user && (await user.checkPassword(password)) ){
            return user
        }
        return false
    },
    cookiePassword: process.env.SECRET,
})

app.use(adminjs.options.rootPath, router)

const port = 8080
app.listen(port, () => console.log(`AdminJS is under localhost:${port}/admin`))