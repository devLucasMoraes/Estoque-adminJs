import bcrypt from 'bcrypt'

export const createPasswordHash = async (password) => {
    return bcrypt.hash(password, 12)
}

export const checkPassword = (user, password) => {
    return bcrypt.compare(password, user.password_hash)
}