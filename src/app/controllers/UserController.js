const User = require('../models/User')
const { format } = require('date-fns')

module.exports = {
  async create (req, res) {
    const { name, birthday, email } = req.body

    const actualYear = new Date().getFullYear()

    const formatAge = format(new Date(birthday), 'yyyy')

    const age = Number(actualYear) - Number(formatAge)

    const emailExists = await User.findOne({ where: { email } })

    if (emailExists) {
      return res.status(400).json({ error: 'Email already exists' })
    }

    const user = await User.create({
      name,
      email,
      birthday,
      age
    })
    console.log(user)

    return res.status(200).json(user)
  },
  async index (req, res) {
    const users = await User.findAll()

    return res.status(200).json({ users })
  },
  async update (req, res) {
    const { id } = req.params
    const { name, birthday, email } = req.body

    const actualYear = new Date().getFullYear()

    const formatAge = format(new Date(birthday), 'yyyy')

    const age = Number(actualYear) - Number(formatAge)

    let userID = await User.findByPk(id)

    if (!userID) {
      return res.status(400).json({ error: 'User not found' })
    }

    const user = await User.update({
      name,
      birthday,
      email,
      age
    }, {
      where: {
        id
      }
    })
    userID = await User.findByPk(id)
    if (user) {
      return res.status(200).json(userID)
    } else {
      return res.status(400).json({ message: 'user not found' })
    }
  },
  async delete (req, res) {
    const { id } = req.params

    const userID = await User.findByPk(id)

    if (!userID) {
      return res.status(400).json({ error: 'User not found' })
    }

    const user = await User.destroy({
      where: {
        id
      }
    })

    if (user) {
      return res.status(200).json({ message: 'successfully deleted' })
    } else {
      return res.status(400).json({ message: 'user not found' })
    }
  },
  async getUserById (req, res) {
    const { id } = req.params

    const userID = await User.findByPk(id)

    if (!userID) {
      return res.status(400).json({ error: 'User not found' })
    }

    return res.status(200).json(userID)
  }
}
