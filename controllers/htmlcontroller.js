// **********************************
// ********** DEPENDENCIES **********
// **********************************
var db = require("../models");

// *********************************
// ********** Controllers **********
// *********************************
var exports = (module.exports = {});

// Controller for the login route
exports.login = function(req, res) {
  res.render("testlogin");
};

// Controller for the dashboard route
exports.mainPage = function(req, res) {
  db.Exercise.findAll({}).then(function(data) {
    var exerciseArray = [];
    for (var i = 0; i < data.length; i++) {
      data[i].dataValues.userid = req.user.id;
      exerciseArray.push(data[i].dataValues);
    }
    var exerciseObject = {
      exercise: exerciseArray,
      user: req.user.username
    };
    res.render("testmainpage", exerciseObject);
  });
};

// Controller for specific exercise data for the user
exports.exerciseSummary = function(req, res) {
  db.UserData.findAll({
    where: {
      userId: req.params.userid,
      exerciseId: req.params.exerciseid
    }
  }).then(function(data) {
    console.log(data);
    res.render("testworkoutsummary");
  });
};

// Controller for the logout route
exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    if (!err) {
      res.redirect("/");
    } else {
      console.log(err);
    }
  });
};
