const express = require('express')
const router = express.Router()
const LoginRouter = require('./LoginRoutes')
const UserRouter = require('./UserRoutes')

//Para Login
router.use('/login',LoginRouter)
router.use('/usuario',UserRouter)





module.exports = router
