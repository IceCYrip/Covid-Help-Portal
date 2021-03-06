const mongoose = require('mongoose');
const { Schema } = mongoose;

const SupplierSchema = new Schema({

    compname: {
        type: String
    },
    suppname: {
        type: String
    },
    contact: {
        type: Number,
        required: true
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
    upi: {
        type: String,
        required: true
    },
    mask: {
        type: Number,

    },
    remdevisir: {
        type: Number,

    },
    oxygencylinder: {
        type: Number,

    },
    usertype: {
        type: String,
        required: true,
    },
});

const Supplier = mongoose.model('supplier', SupplierSchema);
module.exports = Supplier;