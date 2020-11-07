const Transaction = require('../model/Transaction')
// @desc   Get all transction
// @router GET /API/V1/transction
// @access PUBLIC
exports.getTransction = async (req, res, nex) => {
  try {
    const transaction = await Transaction.find()

    return res.status(200).json({
      success: true,
      count: transaction.length,
      data: transaction,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

// @desc   add new  transction
// @router POST  /API/V1/transction
// @access PUBLIC
exports.addTransction = async (req, res, nex) => {
  try {
    const { text, amount } = req.body

    const transaction = await Transaction.create(req.body)
    return res.status(201).json({
      success: true,
      data: transaction,
    })
  } catch (err) {
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
// @desc   delete  transction
// @router DELETE /API/V1/transction
// @access PUBLIC
exports.deleteTransction = async (req, res, nex) => {
  try {
    const transaction = await Transaction.findById(req.params.id)

    // check transaction exist
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      })
    }

    // reomve the transaction
    await transaction.remove()
    return res.status(200).json({
      success: true,
      data: {},
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}
