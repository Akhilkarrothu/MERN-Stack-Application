const mongoose = require('mongoose');

reviewSchema = mongoose.Schema({
    _id: String,
    review_id: String,
    user_id: String,
    business_id: String,
    stars: Number,
    useful: Number,
    funny: Number,
    cool: Number,
    text: String,
    date: String
}, {collection: 'Review'});

module.exports = reviewSchema;