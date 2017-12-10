const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const userSchema = new mongoose.Schema({
  provider_id: String,
  email: String,
  fname: String,
  lname: String,
  password: String,
  provider: String,
  token: String,
  profile_pic: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
