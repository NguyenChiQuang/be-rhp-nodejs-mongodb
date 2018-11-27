const express = require('express');
const router = express.Router();

const product = require('../../controllers/product');

router.route('/')
    .get(product.index)
    .post(product.create)
    .delete( product.delete);
router.get('/:id', product.getProductById);
router.post('/duplicate', product.duplicateById)
module.exports = router;