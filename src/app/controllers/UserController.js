const User = require('../models/User')
const { format } = require('date-fns')

module.exports = {
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
  },
  async list (req, res) {
    const users = await User.findAll()

    return res.status(200).json({ users })
  },
  async update (req, res) {
    const { id } = req.params
    const { name, birthday } = req.body

    const actualYear = new Date().getFullYear()

    const formatAge = format(new Date(birthday), 'yyyy')

    const age = Number(actualYear) - Number(formatAge)

    const user = await User.update({
      name,
      birthday,
      age
    }, {
      where: {
        id
      }
    })

    if (user) {
      return res.status(200).json({ message: 'successfully updated' })
    } else {
      return res.status(400).json({ message: 'user not found' })
    }
  }
}
