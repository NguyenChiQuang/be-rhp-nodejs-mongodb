const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//initialize table structure
const productSchema = new Schema({
    idProduct: {
        type: Number,
    },
    nameProduct: {
        type: String,
        required: true
    },
    descProduct: {
        type: String,
        required: true
    },
    imageProduct: {
        type: String,
        required: true
    },
    libraryImage: {
        type: [Object],
        required: true
    },
    categoryProduct: {
        type: Object,
        required: true
    },
    other: { type: String },
    other2: { type: String },
    other3: { type: String },
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;