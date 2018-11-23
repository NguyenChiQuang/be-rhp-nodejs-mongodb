const express = require('express');
const router = express.Router();

const demo = require('../../controllers/demo');

router.route('/')
    .get(demo.index)
    .post(demo.create)

module.exports = router;