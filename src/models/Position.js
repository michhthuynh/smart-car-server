const mongoose = require('mongoose')
const positionSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  lng: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
})

const PositionModel = mongoose.model('Position', positionSchema)
module.exports = PositionModel