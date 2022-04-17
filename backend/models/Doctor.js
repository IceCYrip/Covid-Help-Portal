const mongoose = require('mongoose');
const { Schema } = mongoose;

const DoctorSchema = new Schema({
    sno: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

const Doctor = mongoose.model('doctor', DoctorSchema);
module.exports = Doctor;