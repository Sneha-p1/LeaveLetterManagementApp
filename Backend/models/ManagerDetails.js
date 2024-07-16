const mongoose = require("mongoose");
const managerSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  userType: { type: String,required: true },

});
module.exports = mongoose.model("Manager", managerSchema);