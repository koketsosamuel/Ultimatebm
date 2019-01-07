const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/paymentController')

// MAKE ONE PAYMENT
router.post('/:id', paymentController.pay)

module.exports = router