import Sequelize from "sequelize";
import config from '../config/database.js'

// import Model from ''
import Users from "../models/users.js"
import Categorias from "../models/categorias.js"
import Materiais from "../models/materiais.js"
import Fornecedores from "../models/fornecedores.js"
import Transportadoras from "../models/transportadoras.js"
import Transacoes_entrada from "../models/transacoes_entrada.js"
import Destino from "../models/destinos.js";
import Requisitantes from "../models/requisitantes.js"
import Transacoes_saida from "../models/transacoes_saida.js"
import Estoque from "../models/estoque"


const models = [Users, 
    Categorias, 
    Materiais, 
    Fornecedores, 
    Transportadoras, 
    Transacoes_entrada, 
    Destino, 
    Requisitantes,
    Transacoes_saida,
    Estoque

]

class Database {
    constructor() {
        this.connection = new Sequelize(config)
        this.init()
        this.associate()
    }

    init() {
        models.forEach(model => {
            model.init(this.connection)
        })
    }

    associate(){
        models.forEach(model => {
            model.associate(this.connection.models)
        })
    }
}

export default new Database()