const mongoose = require('mongoose')

// create schema
const TransctionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'please add some text'],
  },
  amount: {
    type: Number,
    required: [true, 'please add a positive or negative number'],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Transction', TransctionSchema)
