const mongoose = require('mongoose')

// create the schema
const userSshema = new mongoose.Sshema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  emial: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 1662,
    min: 6,
  },
  avatar: {
    // user image
    type: String,
  },
  role: {
    // role of user it will be (normal or admin)
    type: Number,
    default: 0,
  },
  history: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', userSshema)
