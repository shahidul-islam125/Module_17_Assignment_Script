const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
    user: {type: mongoose.Schema.types.ObjectId, required: true, ref: 'User'},
    product: {type: mongoose.Schema.types.ObjectId, required: true, ref: 'Product'},
    quantity: {type: Number, required: true, min: 1}

}, {
    timestamps: true, versionKey:false
})

const CartItem = mongoose.model('carts', DataSchema)

module.exports = CartItem;