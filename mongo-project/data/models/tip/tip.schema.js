const mongoose = require('mongoose');

tipSchema = mongoose.Schema({
    _id: String,
    user_id: String,
    business_id: String,
    text: String,
    date: String,
    compliment_count: Number
}, {collection: 'Tip'});

module.exports = tipSchema;