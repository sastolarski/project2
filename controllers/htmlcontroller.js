// **********************************
// ********** DEPENDENCIES **********
// **********************************
var db = require("../models");

// *********************************
// ********** Controllers **********
// *********************************
var exports = (module.exports = {});

// Controller for the homepage
exports.example = function(req, res) {
  res.render("example");
};

// Controller for the login route
exports.signup = function(req, res) {
  res.render("signuppage");
};

// Controller for the login route
exports.login = function(req, res) {
  res.render("login");
};

// Controller for the dashboard route
exports.mainPage = function(req, res) {
  res.render("mainPage");
};

// Controller for upperbody exercise recording
exports.upperbody = function(req) {
  db.Exercise.findAll({
    where: {
      upperBody: true
    }
  }).then(function(data) {
    var exerciseArray = [];
    for (var i = 0; i < data.length; i++) {
      data[i].dataValues.userid = req.user.id;
      exerciseArray.push(data[i].dataValues);
    }
    var exerciseObject = {
      exercise: exerciseArray,
      user: req.user.username
    };
    res.render("upper", exerciseObject);
  });
};

// Controller for upperbody exercise recording
exports.lowerbody = function(req) {
  db.Exercise.findAll({
    where: {
      lowerBody: true
    }
  }).then(function(data) {
    var exerciseArray = [];
    for (var i = 0; i < data.length; i++) {
      data[i].dataValues.userid = req.user.id;
      exerciseArray.push(data[i].dataValues);
    }
    var exerciseObject = {
      exercise: exerciseArray,
      user: req.user.username
    };
    res.render("lowerPage", exerciseObject);
  });
};

// Controller for exercise history
exports.history = function(req) {
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
    res.render("history", exerciseObject);
  });
};

// **************************************
// ********** POST Controllers **********
// **************************************

// Controller for specific exercise data for the user
exports.exerciseSummary = function(req, res) {
  db.UserData.findAll({
    where: {
      userId: req.params.userid,
      exerciseId: req.params.exerciseid
    }
  }).then(function() {
    res.render("testworkoutsummary");
  });
};

// Controller for exercise submission
exports.submit = function(req) {
  db.UserData.create({
    userId: req.user.id,
    exerciseId: req.body.exercise.id,
    sets: req.body.exercise.sets,
    reps: req.body.exercise.reps,
    weightUsed: req.body.exercise.weight
  }).then(function() {
    // nothing needs to happen once this is done..
  });
};
