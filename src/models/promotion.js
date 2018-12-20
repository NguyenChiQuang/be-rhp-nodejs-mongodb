const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//initialize table structure
const promotionSchema = new Schema({
    namePromotion: {
        type: String,
        required: true
    },
    descPromotion: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    imagePromotion: {
        type: String,
        required: true
    },
    other: { type: String },
    other2: { type: String },
    other3: { type: String },
});

const Oder = mongoose.model('promotion', promotionSchema);
module.exports = Oder;