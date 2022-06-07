const User = require('../models/User')
const { format } = require('date-fns')

class UserController {
  async create (req, res) {
    const { name, birthday } = req.body

    const actualYear = new Date().getFullYear()

    const formatAge = format(new Date(birthday), 'yyyy')

    const age = Number(actualYear) - Number(formatAge)

    const user = await User.create({
      name,
      birthday,
      age
    })
    console.log(user)

    return res.status(200).json(user)
  }
}

module.exports = new UserController()
