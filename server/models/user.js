const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }, 
  termsAccepted: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
  },
  location: {
    type: String,
  },
});

const User = mongoose.models.users || mongoose.model("User", userSchema);
module.exports = User;
