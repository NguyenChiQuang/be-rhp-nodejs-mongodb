const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//initialize table structure
const storeSchema = new Schema({
    nameStore: {
        type: String,
        required: true
    },
    addressStore: {
        type: String,
        required: true
    },
    startWork: {
        type: Date,
        required: true
    },
    endWork: {
        type: Date,
        required: true
    },
    other: { type: String },
    other2: { type: String },
    other3: { type: String },
});

const Oder = mongoose.model('store', storeSchema);
module.exports = Oder;