const Order = require('../model/Order')

// @desc  GET all orderS
// @route GET /api/v1/orders
//@access  public
exports.allorder = async (req, res, next) => {}
// @desc  GET sangle orderS
// @route GET /api/v1/orders/id
//@access  public

exports.getorder = async (req, res, next) => {}
// @desc  Add new order
// @route POST   /api/v1/orders
//@access  public
exports.addorder = async (req, res, next) => {
  try {
    const { quantity, product } = req.body

    const order = await Order.create(req.body)
    return res.status(201).json({
      success: true,
      data: order,
    })
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: 'Server Error',
    })
  }
}

// @desc  UPDATE A  order
// @route GET /api/v1/orders/:id
//@access  public
exports.updateorder = async (req, res, next) => {
  const id = req.params.id
}

// @desc  DELETE  A orderS
// @route DELETE /api/v1/orders/:id
//@access  public
exports.deleteProduct = async (req, res, next) => {
  const id = req.params.id
}
