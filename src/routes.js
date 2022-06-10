const express = require('express')
const UserController = require('./app/controllers/UserController')
const { UserValidate } = require('./app/middleware/UserValid')
const routes = express.Router()

routes.post('/users', UserValidate, UserController.create)
routes.put('/users/:id', UserValidate, UserController.update)
routes.delete('/users/:id', UserController.delete)
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.getUserById)

module.exports = routes
