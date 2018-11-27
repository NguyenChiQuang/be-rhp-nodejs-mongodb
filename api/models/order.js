const mongoose = require('mongoose');

const orderSchema= mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    productId: String,
    quantity:{type:String,require:true},
});


module.exports=mongoose.model('Order', orderSchema);