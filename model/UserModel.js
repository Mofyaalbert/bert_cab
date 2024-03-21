const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  mobile: {
    type: String,
    require: true,
  },
  isMobileVerified: {
    type: String,
    default: "",
  },
  isEmailVerified: {
    type: String,
    default: "",
  },
  token: {
    type: String,
    default: "",
  },
  dateCreate: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("user", userScheme);
