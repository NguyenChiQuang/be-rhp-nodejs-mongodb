const express = require('express')

// require file for is me init in project
const demo = require('./api/demo');

const router = express.Router()

// route
router.use('/demo', demo);


module.exports = router;