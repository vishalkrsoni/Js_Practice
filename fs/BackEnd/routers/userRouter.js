const { Router } = require('express')
const { signup, login, logout } = require('../controllers/userController')

const userRouter = Router()


userRouter.post('/signup', signup)
userRouter.post('/login', login)
userRouter.post('/logout', logout)

module.exports = userRouter