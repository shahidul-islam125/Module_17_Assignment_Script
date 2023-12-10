
const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required:true, ref: 'User'},
    items: [
        {
            product: { type: ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, min: 1 }
        }
    ],

    totalAmount:{type: Number, required: true, min: 0},
    shippingAddress: {type: String, required: true},
    status: {type: String, required: true, default: 'Pending'}

}, {
    timestamps: true, versionKey:false
})

const Order = mongoose.model('orders', DataSchema)

module.exports = Order;
