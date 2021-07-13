const UserModel = require("../../models/User")

module.exports.remove = async (req, res) => {
  const result = await UserModel.deleteOne({ username: req.body.username })
  if (result.deletedCount > 0) {
    res.send('Ok')
  } else {
    res.sendStatus(400)
  }
}