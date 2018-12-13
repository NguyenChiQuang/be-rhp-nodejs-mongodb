const express = require('express');
const router = express.Router();

const stores = require('../controllers/store');

// router.route('/')
//   .post(orders.createOrder)
//   .get(orders.getAllOrders);

// router.route('/:userId')
//   .get(orders.getOneOrder)
//   .put(orders.updateOrder)
//   .delete(orders.deleteOrder);
  
// router.param('orderId', orders.getByIdOrder);

module.exports = router;