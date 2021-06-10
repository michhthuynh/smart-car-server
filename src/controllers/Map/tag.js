
const UserModel = require("../../models/User")

module.exports.postTag = async (req, res) => {
  const id = req.body.id
  const result = await UserModel.find({ tag_id: id })
  if (result[0] !== undefined) {
    // TODO: update status user tag
    const { number } = result[0]
    // Check number
    if (number <= 0) {
      res.status(400).json({
        msg: "Tag invalid. Please renew tag"
      })
      return
    } else {
      const result = await UserModel.updateOne({ tag_id: id }, { number: number - 1 })
      if (result.ok === 1) {
        console.log("Update successfully")
        res.send("OK")
        return
      } else {
        console.log("Update failed!!!")
        res.sendStatus(503)
      }
    }
  } else {
    res.status(400).json({
      msg: "Tag invalid"
    })
  }
}

module.exports.getTag = async (req, res) => {
  res.json({
    "ids": [
      [234, 130, 227, 20, 159],
      [218, 215, 14, 20, 23]
    ]
  })
}

module.exports.postRegisterTag = async (req, res) => {
  // TODO: register tag for user
  res.send('OK')
}

module.exports.postRenewTag = async (req, res) => {
  // TODO: renew number of user tag
  res.send('OK')
}