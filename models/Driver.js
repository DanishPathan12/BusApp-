const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const driverSchema = new Schema({
  license: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  busNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});


const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
