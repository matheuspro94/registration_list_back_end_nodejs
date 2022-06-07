const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (connection) {
    super.init({
      name: DataTypes.STRING,
      birthday: DataTypes.DATE,
      age: DataTypes.INTEGER
    }, {
      sequelize: connection
    })
  }
}

module.exports = User
