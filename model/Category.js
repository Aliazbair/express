const mongoose = require('mongoose')

const catSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: [true, 'please fill the field'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Category', catSchema)
