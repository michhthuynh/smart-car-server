const bcrypt = require('bcrypt')
const UserModel = require('../../models/User')
const jwt = require('jsonwebtoken')

module.exports.register = async (req, res) => {
  const { username, password, prePassword, age, male, number, tag_id, fullName } = req.body
  if (password !== prePassword) {
    console.log("Some field is empty")
    res.sendStatus(400)
    return
  }

  const userExist = await UserModel.find({ username: username })
  if (userExist.length) {
    res.status(409).json({
      message: "Username already exists"
    })
    return
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await UserModel.create({
      fullName,
      username,
      password: hashPassword,
      age,
      male,
      number,
      tag_id,
    })

    jwt.sign({ username }, 'secret', { expiresIn: '24h' }, (err, token) => {
      if (err) {
        console.log(err.message)
        res.sendStatus(503)
        return
      }
      console.log("Create token: ", user.id)
      res.json({
        id: user.id,
        fullName: fullName,
        age: age,
        number: number,
        email: username,
        male: male ? 'Male' : 'Female',
        token
      })
      return
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'Create account failed'
    })
    return
  }
}