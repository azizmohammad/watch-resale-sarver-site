const { Schema, model } = require('mongoose');

// picture, name, location, resale price, original price, years of use, the time when it got posted

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    resalePrice: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    userName: String,
    userImage: String,
    yearsOfuse: String,
    userId: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    location: String,
    createdTime: Number
}, { timestamps: true });

const Product = model('Product', productSchema);

module.exports = Product;