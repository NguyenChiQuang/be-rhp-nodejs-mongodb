const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//initialize table structure
const categorySchema = new Schema({
    nameCategory: {
        type: String,
        required: true
    },
    descCategory: {
        type: String,
        required: true
    },
    idParent: {
        type: Number,
        required: true
    },
    products: {
        type: [Object],
        required: true
    },
    other: { type: String },
    other2: { type: String },
    other3: { type: String },
});

const Oder = mongoose.model('category', categorySchema);
module.exports = Oder;