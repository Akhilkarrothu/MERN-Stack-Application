const mongoose = require('mongoose');

businessSchema = mongoose.Schema({
    _id: String,
    business_id: String,
    name: String,
    address: String,
    city: String,
    state: String,
    postal_code: String,
    latitude: Number,
    longitude: Number,
    stars: Number,
    review_count: Number,
    is_open: Number,
    attributes: [{name : String}],
    categories: String,
    hours: [{name : String}],
    comment: String
}, {collection: 'Business'});

module.exports = businessSchema;