const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//initialize table structure
const productSchema = new Schema({
    userId: {
        type: String,
        required:true
    },
    nameProduct: {
        type: String,
        required:true
    },
    descProduct: {
        type: String,
        required:true
    },
    priceProduct: {
        type: Number,
        default: 0,
        required:true
    },
    qty: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0,
        required:true
    },
});

const Product = mongoose.model('product', productSchema);
module.exports =  Product;