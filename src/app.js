const routes = require('./router')
const cors = require('cors')
const express = require('express')

class App {
  constructor () {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes () {
    this.server.use(routes)
  }
}

module.exports = new App().server
