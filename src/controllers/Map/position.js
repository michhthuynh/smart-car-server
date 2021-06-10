const PositionModel = require("../../models/Position")

module.exports.postPosition = async (req, res) => {
  const { lat, lng, number } = req.body
  const result = await PositionModel.updateOne({ tag: "1234" }, { lat, lng, number })
  if (result.ok === 1) {
    console.log("Update position successfully")
    res.send("OK")
    return
  } else {
    console.log("Cannot connect mongodb...")
    res.status(503).json({
      msg: "Cannot update position..."
    })
  }
}