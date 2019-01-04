const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')



// GET ALL CUSTOMERS
router.get('/', customerController.getCustomers)

// GET SINGLE CUSTOMER
router.get('/:id', customerController.getCustomer)

// ADD CUSTOMER
router.post('/', customerController.addCustomer)

// UPDATE CUSTOMER
router.put('/:id', customerController.updateCustomer)

// DELETE CUSTOMER
router.delete('/:id', customerController.deleteCustomer)

router.post('/pay', customerController.pay)


// MODULE EXPORT
module.exports = router