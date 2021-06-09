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
  const id = req.query.id
  const querySearch = await TagModel.find({ tag_id: id })
  if (querySearch[0] !== undefined) {
    // TODO send status of tag (valid/invalid)
    res.json({
      id: id,
      valid: true
    })
    return
  } else {
    // No co tag id
    res.sendStatus(400)
    return
  }
}