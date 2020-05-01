const mongoose = require('mongoose');

checkinSchema = mongoose.Schema({
    _id: String,
    business_id: String,
    date: String
}, {collection: 'Checkin'});

module.exports = checkinSchema;