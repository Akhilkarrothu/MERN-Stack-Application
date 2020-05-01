const mongoose = require('mongoose');

const checkinSchema = require('./checkin.schema');

const checkinModel= mongoose.model('CheckinModel', checkinSchema);

module.exports= checkinModel