const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({

    uname: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    usertype: {
        type: String,
        required: true,
    },
});

const Admin = mongoose.model('admin', AdminSchema);
module.exports = Admin;