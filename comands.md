npm i @adminjs/express adminjs express
npm i sucrase nodemon -D

npm i @adminjs/sequelize sequelize  mysql2 dotenv 
npm i sequelize-cli -D

--executar esse comando na pasta src--
npx sequelize-cli init

npx sequelize-cli model:generate --name [ nome em plural ] --attributes [ chave:valor,chave:valor ]
npx sequelize-cli model:generate --name Users --attributes username:string,email:string,password_hash:string,ativo:boolean

npx sequelize-cli db:migrate
