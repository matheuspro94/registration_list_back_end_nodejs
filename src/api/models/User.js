const { Model, Sequelize } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        birth: Sequelize.DATE,
        age: Sequelize.INTEGER
      },
      {
        sequelize
      }
    )
    return this
  }
}

module.exports = User
