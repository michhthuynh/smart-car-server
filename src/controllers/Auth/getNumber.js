const UserModel = require("../../models/User")

module.exports = getNumber = async (req, res) => {
  const { email } = req.body
  try {
    const user = await UserModel.find({ username: email })
    res.json({
      msg: user[0].number
    })
    return
  } catch (error) {
    console.log(error.response)
  }
}