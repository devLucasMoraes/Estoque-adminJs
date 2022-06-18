import 'dotenv/config'
import './database'

import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import express from 'express'

AdminJS.registerAdapter(AdminJSSequelize)

const app = express()

const adminjs = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: []
})

const router = AdminJSExpress.buildRouter(adminjs)

app.use(adminjs.options.rootPath, router)

const port = 8080
app.listen(port, () => console.log(`AdminJS is under localhost:${port}/admin`))