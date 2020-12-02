const router = require('express').Router()
const uploadMulter= require('../middleware/upload')
const validation= require('../middleware/validation')
const {
  allProducts,
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
} = require('../controller/products')

router.route('/').get(allProducts).post(uploadMulter,validation,addProducts)
router
  .route('/:id')
  .get(getProducts)
  .patch(updateProducts)
  .delete(deleteProducts)

module.exports = router
