const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//initialize table structure
const orderSchema = new Schema({
    idOrder: {
        type: String,
        required: true
    },
    products: {
        type: [Object],
        required: true
    },
    totalPrices: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    typeOrder: {
        type: String,
        required: true
    },
    other: { type: String },
    other2: { type: String },
    other3: { type: String },
});

const Oder = mongoose.model('oder', orderSchema);
module.exports = Oder;