const express = require('express')
const router = express.Router()
const { timeLogger } = require('../middleware')
const { quoteController } = require('../controllers')

// middleware that is specific to this router
router.use(timeLogger)

router.get('/quote', quoteController.show)
router.get('/quotes', quoteController.findAll)
module.exports = router
