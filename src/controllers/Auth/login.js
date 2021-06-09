const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../../models/User')

module.exports.loginPost = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await UserModel.find({ username })
    if (user[0] === undefined) {
      res.sendStatus(400)
      return
    }
    const isCompare = await bcrypt.compare(password, user[0]['password'])
    if (isCompare) {
      console.log('Verify account successfully')
      jwt.sign({ username }, "secret", { expiresIn: '24h' }, (err, token) => {
        if (err) {
          console.log(err.message)
          res.sendStatus(503)
          return
        }
        res.status(200).json({
          id: user[0].username,
          token
        })
        return
      })
    } else {
      res.status(401).json({
        message: 'Wrong password.'
      })
      return;
    }
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
    return
  }
}