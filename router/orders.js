const router = require('express').Router()
const {
  allOrder,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
} = require('../controller/order')

router.route('/').get().post(addOrder)
router.route('/:id').get(getOrder).patch(updateOrder).delete(deleteOrder)

module.exports = router
