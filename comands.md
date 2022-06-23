npm i @adminjs/express adminjs express
npm i sucrase nodemon -D

npm i @adminjs/sequelize sequelize  mysql2 dotenv 
npm i sequelize-cli -D

--executar esse comando na pasta src--
npx sequelize-cli init

npx sequelize-cli model:generate --name [ nome em plural ] --attributes [ chave:valor,chave:valor ]
npx sequelize-cli model:generate --name Users --attributes username:string,email:string,password_hash:string,ativo:boolean

npx sequelize-cli db:migrate

npx sequelize-cli model:generate --name Categorias --attributes nome:string,und_medida:string,estoque_min:decimal,user_id:integer

npx sequelize-cli db:migrate

npx sequelize-cli model:generate --name Materiais --attributes descricao:string

npx sequelize-cli db:migrate

npx sequelize-cli model:generate --name Fornecedores --attributes name:string,fone:string



npx sequelize-cli model:generate --name Fornecedores --attributes name:string,fone:string

npx sequelize-cli db:migrate

npx sequelize-cli model:generate --name Transacoes_entrada --attributes qtd:decimal,valor:decimal,valor_frete:decimal,nfe:string,obs:text

npx sequelize-cli model:generate --name Destinos --attributes name:string,fone:string


npx sequelize-cli model:generate --name Requisitantes --attributes name:string,fone:string

npx sequelize-cli model:generate --name Transacoes_saida --attributes qtd:decimal,valor:decimal,op:string,obs:text

npx sequelize-cli seed:generate --name demo-users

npx sequelize-cli db:seed:all

npx sequelize-cli seed:generate --name demo-categorias

npx sequelize-cli seed:generate --name demo-materiais