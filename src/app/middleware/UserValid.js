const Yup = require('yup')

module.exports = {
  async UserValidate (req, res, next) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      birthday: Yup.date().required()
    })

    try {
      await schema.validate(req.body)
    } catch (e) {
      return res.status(400).json({ error: e.errors[0] })
    }

    next()
  }
}
