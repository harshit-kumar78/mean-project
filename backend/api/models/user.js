const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:root@mean-project.fhzjij3.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

var userModel = mongoose.model("user", userSchema);

module.exports = userModel;
