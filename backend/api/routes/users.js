var express = require("express");
var router = express.Router();
// import user model
var userModel = require("../models/user");
/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "user data" });
// });

router.get("/", (req, res, next) => {
  var userDetails = new userModel({
    name: "harshit",
    email: "pk@gmail.com",
    password: "qwerty",
  });

  userDetails.save((err, req) => {
    if (err) throw err;
    res.render("index", { title: "user data inserted" });
  });
});

module.exports = router;
