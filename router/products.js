const router = require('express').Router()
const {
  allProducts,
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
} = require('../controller/products')

router.route('/').get(allProducts).post(addProducts)
router
  .route('/:id')
  .get(getProducts)
  .patch(updateProducts)
  .delete(deleteProducts)

module.exports = router
