const Sequelize = require('sequelize')
const User = require('../api/models/User')
const databaseConfig = require('../config/database')

const models = [User]

class Database {
  constructor () {
    this.init()
    this.mongo()
  }

  init () {
    this.connection = new Sequelize(databaseConfig)

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

module.exports = new Database()
