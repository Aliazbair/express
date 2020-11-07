const Product = require('../model/Product')

// @desc  GET all PRODUCTS
// @route GET /api/v1/products
//@access  public
exports.allProducts = async (req, res, next) => {}

// @desc  GET sangle PRODUCTS
// @route GET /api/v1/products/id
//@access  public
exports.getProducts = async (req, res, next) => {}

// @desc  Add new PRODUCT
// @route POST   /api/v1/products
//@access  public
exports.addProducts = async (req, res, next) => {
  try {
    const { name, price } = req.body
    const product = await Product.create(req.body)
    return res.status(201).json({
      success: true,
      data: product,
    })
  } catch (error) {
    // get the errors from mongoebd
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message)
      return res.status(400).json({
        success: false,
        error: messages,
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'server error',
      })
    }
  }
}

// @desc  UPDATE A  PRODUCT
// @route GET /api/v1/products/:id
//@access  public
exports.updateProducts = async (req, res, next) => {
  const id = req.params.id
}

// @desc  DELETE  A PRODUCTS
// @route DELETE /api/v1/products/:id
//@access  public
exports.deleteProducts = async (req, res, next) => {
  const id = req.params.id
}
