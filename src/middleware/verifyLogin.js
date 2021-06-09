const bcrypt = require('bcrypt');
const UserModel = require('../model/user');


const verifyLogin = async (req, res, next) => {
  const { username, password } = req.body

  const result = await UserModel.find({ username: username });
  if (!result[0]) {
    res.status(401).json({
      message: 'User does not exist'
    });
    return;
  }

  const match = await bcrypt.compare(password, result[0]['password'])

  if (!match) {
    res.status(401).json({
      message: 'Wrong password.'
    })
    return;
  }
  res.locals.id = result[0]['id']
  console.log('Verify account successfully')
  next()
}

module.exports = verifyLogin