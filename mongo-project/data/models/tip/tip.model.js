const mongoose = require('mongoose');

const tipSchema = require('./tip.schema');

const tipModel= mongoose.model('TipModel', tipSchema);

module.exports= tipModel