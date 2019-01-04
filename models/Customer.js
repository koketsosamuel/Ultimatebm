const mongoose = require('mongoose')

// DATE FORMATTING
let d = new Date(Date.now())

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let month = months[d.getMonth()]

let dateString = `${d.getDate()} ${month} ${d.getFullYear()}`


// PAYMENT RECORD SCHEMA
let paymentRecordSchema = mongoose.Schema({
    recorded: {
        type: String,
        default: dateString
    },

    amount: {
        type: Number,
        required: true
    },

    paymentType: {
        type: String,
        required: true
    },

    dateOfPayment: {
        type: String,
        required: true
    },


    balanceAfterPayment: {
        type: Number,
        required: true
    },

    recordedBy: {
        type: String,
        required: true
    }
})

// MAIN SCHEMA SCHEMA
let customerSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true
    },

    cellNumber: {
        type: Number,
        required: true,
        unique: true
    },

    subscriptional: {
        type: Boolean,
        required: true
    },

    onceOffPayment: {
        type: Number,
        default: 0
    },

    service: {
        type: String
    },

    monthlyPayment: {
        type: Number,
        default: 0
    },

    paymentRecords: {
        type: [paymentRecordSchema]
    },

    balance: {
        type: Number
    },

    status: {
        type: String,
        default: 'active'
    },

    registered: {
        type: String,
        default: dateString
    }
})


// MODEL
let Customer = mongoose.model('Customer', customerSchema)

// MODULE EXPORT
module.exports = Customer