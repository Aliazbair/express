const router = require('express').Router()
const {
  getTransction,
  addTransction,
  deleteTransction,
} = require('../controller/transaction')

// get and post route
router.route('/').get(getTransction).post(addTransction)

// delete route
router.route('/:id').delete(deleteTransction)

module.exports = router
