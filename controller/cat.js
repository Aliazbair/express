const Cat = require('../model/Category')

const upload = require('../middleware/upload')
const validation = require('../middleware/validation')

//@desc  add new category
// @route  POST: api/v1/category
//@ Access public
exports.addCat = (req, res) => {
  const { name, image } = req.body
  const category = new Cat({
    name,
    image,
  })
  category.save((err, cat) => {
    if (err) {
      return res.status(400).json({
        errors: err.message,
      })
    }
    res.status(200).json({
      message: 'created category successfully',
      cat,
    })
  })
}
