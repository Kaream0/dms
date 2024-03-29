const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    quantity: {type:Number, required:true},
    imageUrl: {type:String},
    createdAt: {type:Date, default: Date.now}
})

module.exports = mongoose.model('Product', productSchema);