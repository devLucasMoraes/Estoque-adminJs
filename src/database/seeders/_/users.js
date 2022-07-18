const usersJSON = [
{"name":"Administrador","email":"administrador@administrador.com","password_hash":"$12$W2BZ99uCHmHaS/dhMgavUOscDDHceYDrLF691PPKKTg5x8i.ACRiu","role":"administrador","status":"ativo","createdAt":"2022-06-30 15:25:20","updatedAt":"2022-06-30 15:25:20"},
{"name":"Operador","email":"operador@operador.com","password_hash":"$12$PBq85qxgsx1bA9tHT5ovF.CK67UBQn5/MvARa8w4UiKSXaDZlxIxm","role":"operador","status":"ativo","createdAt":"2022-06-30 15:25:20","updatedAt":"2022-06-30 15:25:20"},
{"name":"lucas","email":"lucas@lucas.com","password_hash":"$2b$12$XCZPNQd9e5HA3GvEzyQn6.KeQfqYm2KuNv3ooF6EMaffwMboW.zGy","role":"administrador","status":"ativo","createdAt":"2022-06-30 15:25:20","updatedAt":"2022-06-30 15:29:35"}
]

const array = JSON.parse(JSON.stringify(usersJSON))
//console.log(array)

export default array