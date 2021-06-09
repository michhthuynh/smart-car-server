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
  balance: {
    type: Number,
    required: true
  },
})

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel