const Customer = require('../models/Customer')


// GET ALL CUSTOMERS
module.exports.getCustomers = (req, res) => {

    Customer.find({}, (err, customers) => {
        if (err) {
            res.send({ error: 'An error occured while trying to fetch customers' })
        } else {
            res.json(customers)
        }
    })

}


// GET ONE CUSTOMER
module.exports.getCustomer = (req, res) => {

    Customer.findOne({ _id: req.params.id }, (err, customer) => {
        if (err) {
            res.send({ error: 'error finding customer' })
        } else {
            res.json(customer)
        }
    })

}


// ADD CUSTOMER
module.exports.addCustomer = (req, res) => {

    let newCustomer = new Customer(req.body)

    newCustomer.save((err) => {
        if (err) {
            res.send({ error: 'error saving customer' })
        } else {
            res.sendStatus(200)
        }
    })

}


// UPDATE CUSTOMER
module.exports.updateCustomer = (req, res) => {


    let updateValues = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        email: req.body.email,
        cellNumber: req.body.cellNumber,
        subscriptional: req.body.subscriptional,
        status: req.body.status
    }

    Customer.findOneAndUpdate({ _id: req.params.id }, updateValues, err => {
        if (err) {
            res.send({ error: 'error updating customer details' })
        } else {
            res.sendStatus(200)
        }
    })

}


// DELETE CUSTOMER
module.exports.deleteCustomer = (req, res) => {

    Customer.findOneAndRemove({ _id: req.params.id }, err => {
        if (err) {
            res.send({ error: 'error deleting customer' })
        } else {
            res.sendStatus(200)
        }
    })

}