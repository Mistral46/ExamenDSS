const express = require('express')
const router = express.Router()
const usuario = require('../controllers/UserController')
const auth = require('../middleware/authMiddleware')

router.post('/allusers',auth.authenticate,usuario.allUsers)
router.post('/deleteuser',auth.authenticate,usuario.deleteUser)
router.post('/adduser',auth.authenticate,usuario.addUser)


module.exports = router
