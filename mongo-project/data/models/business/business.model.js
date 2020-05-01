const mongoose = require('mongoose');

const businessSchema = require('./business.schema');

const businessModel= mongoose.model('BusinessModel', businessSchema);

module.exports= businessModel