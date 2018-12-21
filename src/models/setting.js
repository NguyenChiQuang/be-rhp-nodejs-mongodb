const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//initialize table structure
const settingSchema = new Schema({
    language: {
        type: String,
        required: true
    },
    notifications: {
        type: Number,
        required: true
    },
    other: { type: String },
    other2: { type: String },
    other3: { type: String },
});

const Oder = mongoose.model('setting', settingSchema);
module.exports = Oder;