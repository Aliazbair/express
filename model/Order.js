const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    default: 1,
  },
})

module.exports = mongoose.model('Order', orderSchema)
