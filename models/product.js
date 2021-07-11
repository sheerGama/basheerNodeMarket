const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: String,
    unitsInStock: Number,
    productPrice: Number,
    productDescription: String,
    productImage: String,
    isVisible: Boolean,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);