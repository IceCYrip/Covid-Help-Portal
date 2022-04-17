const mongoose = require('mongoose');
const { Schema } = mongoose;

const SupplierItemSchema = new Schema({

    sid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supplier',
    },
    mask: {
        type: Number,

    },
    remdevisir: {
        type: Number,

    },
    oxygencylinder: {
        type: Number,

    }
});

const SupplierItems = mongoose.model('supplieritem', SupplierItemSchema);
module.exports = SupplierItems;