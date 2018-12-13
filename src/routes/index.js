const express = require('express')

// require file for is me init in project
const users = require('./user');
const product = require('./product');
const orders = require('./order');

const router = express.Router()

router.use('/product', product)
router.use('/users', users)
router.use('/orders', orders)

module.exports = router;