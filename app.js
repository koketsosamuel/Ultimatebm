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

// CUSTOMERE ROUTE SETUP
const customerRoutes = require('./routes/customerRoutes')
app.use('/api/customers', customerRoutes)

// LISTEN
app.listen(config.port)