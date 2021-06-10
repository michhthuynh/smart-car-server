const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  male: {
    type: Boolean,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  tag_id: {
    type: String,
    required: true
  },
})

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel