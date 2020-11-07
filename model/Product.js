const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'pleace fill the name'],
    max: 255,
    min: 6,
  },
  price: {
    type: Number,
    required: [true, 'please fill the number'],
    max: 255,
    min: 6,
  },
})

module.exports = mongoose.model('Product', ProductSchema)
