const express = require('express')

// require file for is me init in project
const demo = require('./api/demo');
const product = require('./api/product');
const router = express.Router()

// route
router.use('/demo', demo);

//product
router.use('/product', product)

module.exports = router;