import 'dotenv/config'
import './database'

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

import locales from './locales/index.js'

AdminJS.registerAdapter(AdminJSSequelize)

const app = express()

const adminjs = new AdminJS({
    databases: [],
    rootPath: '/admin',
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
    ...locales
})

const router = AdminJSExpress.buildRouter(adminjs)

app.use(adminjs.options.rootPath, router)

const port = 8080
app.listen(port, () => console.log(`AdminJS is under localhost:${port}/admin`))