const PositionModel = require("../../models/Position")

module.exports.postPosition = async (req, res) => {
  const { lat, lng, number } = req.body
  const { nModified } = await PositionModel.updateOne({ tag: "1234" }, { lat, lng, number })
  if (nModified === 0) {
    const data = await PositionModel.create({
      tag: "1234",
      lng: "0",
      lat: "0",
      number: 0
    })
    console.log("Create default position")
    res.sendStatus(400)
    return
  } else {
    console.log("Update position")
    res.send("OK")
  }
}