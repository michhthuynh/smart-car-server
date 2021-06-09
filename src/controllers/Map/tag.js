const TagModel = require("../../models/Tag")

module.exports.postTag = async (req, res) => {
  const id = req.body.id
  const querySearch = await TagModel.find({ tag_id: id })
  console.log(querySearch[0])
  if (querySearch[0] !== undefined) {
    // TODO update status user tag
    res.send("OK")
    return
  } else {
    // create tag id
    const data = await TagModel.create({
      tag_id: id
    })
    console.log(data)
    res.send('OK')
    return
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