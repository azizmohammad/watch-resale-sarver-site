const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    buyerId: {
        type: String,
        required: true
    },
    sellerId: {
        type: String,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    phone: String,
    meetLocation: String,
    buyerImage: String,
    payment: String
}, { timestamps: true });

const Order = model('Order', orderSchema);

module.exports = Order;