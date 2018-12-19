const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//initialize table structure
const orderSchema = new Schema({
    userId: {
        type: String,
        required:true
    },
    nameCustomer: {
        type: String,
        required:true
    },
    emailCustomer: {
        type: String,
        required:true
    },
    provinceCustomer: {
        type: Number,
        default: 0,
        required:true
    },
    qty: {
        type: Number,
        required: true
    }
});

const Oder = mongoose.model('oder', orderSchema);
module.exports =  Oder;