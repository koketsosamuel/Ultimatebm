const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/config')

// EXPRESS APP INIT
const app = express()

// MONGOOSE CONNECTION
mongoose.connect(config.dbString, {
    useNewUrlParser: true
})

// MIDDLEWARE SETUP
app.use(bodyParser.json())

// CUSTOMER ROUTE SETUP
const customerRoutes = require('./routes/customerRoutes')
app.use('/api/customers', customerRoutes)

// PAYMENT ROUTE SETUP
const paymentRoutes = require('./routes/paymentRoutes')
app.use('/api/pay', paymentRoutes)


// LISTEN
app.listen(config.port)