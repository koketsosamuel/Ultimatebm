const Customer = require('../models/Customer')

// MAKE PAYMENT
module.exports.pay = (req, res) => {

    // FIND CUSTOMER
    Customer.findOne({_id: req.params.id}, (err, customer) => {
        
        if (err) {
            return false
        } else {
            
            let balance = Number(customer.balance) + Number(req.body.amount)
            

            // UPDATE VALUES
            let updateValues = {
                
                $push: {
                    paymentRecords: { 
                        amount: Number(req.body.amount), 
                        paymentType: req.body.paymentType, 
                        dateOfPayment: req.body.dateOfPayment,
                        balanceAfterPayment: balance
                    }
                },

                
                balance: balance

                
            }
        

            // ACTUAL UPDATE
            Customer.findOneAndUpdate({_id: req.params.id}, updateValues, (err) => {
                if(err) throw err
                res.sendStatus(200)
            })
        
        }
    })


}