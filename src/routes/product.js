const express = require('express');
const router = express.Router();

const product = require('../controllers/product');

router.route('/')
  .post(product.createProduct)
  .get(product.getAllProducts);

router.route('/:userId')
  .get(product.getOneProduct)
  .put(product.updateProduct)
  .delete(product.deleteProduct);
  
router.post('/:userId/duplicate', product.duplicateById)

router.param('productId', product.getByIdProduct);

module.exports = router;