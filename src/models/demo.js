const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//initialize table structure
const demoSchema = new Schema({
    name: String,
    desc: String
});

const Demo = mongoose.model('demo', demoSchema);
module.exports =  Demo;