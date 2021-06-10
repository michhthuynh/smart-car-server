const PositionModel = require("../../models/Position")

module.exports.postPosition = async (req, res) => {
  const { lat, lng, number } = req.body
  await PositionModel.updateOne({ tag: "1234" }, { lat, lng, number })
  console.log("Update position")
  res.send("OK")
}