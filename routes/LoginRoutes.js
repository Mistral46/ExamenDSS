const express = require('express')
const router = express.Router()
const loginFunctions = require('../controllers/LoginController')
//const auth = require('../middleware/authMiddleware')

router.get ('/login',loginFunctions.loginForm)
router.post('/Login',loginFunctions.Login)


module.exports = router
