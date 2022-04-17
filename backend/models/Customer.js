const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSchema = new Schema({

    fname: {
        type: String,

    },
    lname: {
        type: String,

    },
    contact: {
        type: Number,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    uname: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true,
    },
});

const Customer = mongoose.model('customer', CustomerSchema);
module.exports = Customer;