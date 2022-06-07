const express = require('express')
const UserController = require('./app/controllers/UserController')
const { UserValidate } = require('./app/middleware/UserValid')
const routes = express.Router()

routes.post('/user', UserValidate, UserController.create)
routes.put('/user/:id', UserValidate, UserController.update)
routes.get('/users', UserController.list)

module.exports = routes
