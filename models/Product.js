const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    id: {type:String, required:true},
    image: {type:String, required:true},
    price: {type:String, required:true},
    url: {type:String, required:true},
    createdBy: {
        type:mongoose.Types.ObjectId, 
        ref: 'User',
        required:true,
    },
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema);