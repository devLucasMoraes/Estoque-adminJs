import bcrypt from 'bcrypt'



export const creatPasswordHash = async (password) => {
    return bcrypt.hash(password, 12)
}

export const checkPassword =  (user, password) => {
    return bcrypt.compare(password, user.password_hash)
}

//// controle de permissoes
export const hasAdminPermission = (currentUser) => {
    return currentUser && currentUser.role === "administrador"
}

export const hasOperatorPermission = (currentUser) => {
    return currentUser && ['administrador', 'operador'].includes(currentUser.role)
}