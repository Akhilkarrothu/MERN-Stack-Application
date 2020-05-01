const mongoose = require('mongoose');

const reviewSchema = require('./review.schema');

const reviewModel= mongoose.model('ReviewModel', reviewSchema);

module.exports= reviewModel