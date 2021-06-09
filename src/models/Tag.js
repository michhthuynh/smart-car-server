const mongoose = require('mongoose')
const tagSchema = new mongoose.Schema({
  tag_id: {
    type: String,
    required: true
  }
})

const TagModel = mongoose.model('Tag', tagSchema)
module.exports = TagModel