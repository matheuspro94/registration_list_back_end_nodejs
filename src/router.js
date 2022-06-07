const { Router } = require('express')
const UserController = require('./api/controllers/UserController')

const router = Router()

router.post('/user', UserController.create)

module.exports = router
