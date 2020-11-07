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
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1662,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', userSshema)
