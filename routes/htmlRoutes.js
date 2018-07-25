// **********************************
// ********** DEPENDENCIES **********
// **********************************
var htmlController = require("../controllers/htmlcontroller.js");

// ***************************
// ********** ROUTES *********
// ***************************
module.exports = function(app) {
  app.get("/", htmlController.login); // Route for the login page
  app.get("/mainpage/:exerciseid/:userid", htmlController.exerciseSummary); // Route to view a summary of a specific exercise data for the user
  app.get("/mainpage", isLoggedIn, htmlController.mainPage); // Route for the mainPage
  app.get("/history", isLoggedIn, htmlController.history); // Route for workout history
  app.get("/logout", htmlController.logout); // Route for logout and return to the login page
  app.post("/upperbody", isLoggedIn, htmlController.upperbody); // Route for upperbody workout
  app.post("/lowerbody", isLoggedIn, htmlController.lowerbody); // Route for lowerbody workout
  app.post("/submit", isLoggedIn, htmlController.lowerbody); // Route to submit workout data

  // Protects the HTML routes to only allow signed in user
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  }
};
