const mongoose = require('mongoose');
const { Schema } = mongoose;

const DonorSchema = new Schema({
    sno: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    }
});

const Donor = mongoose.model('donor', DonorSchema);
module.exports = Donor;