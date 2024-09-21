const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create a schema for the user
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  enrollmentNumber: {
    type: String,
    required: true,
    unique: true
  },
  busNumber: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
