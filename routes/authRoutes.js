// **********************************
// ********** DEPENDENCIES **********
// **********************************
var authController = require("../controllers/authController.js");

// ***************************
// ********** ROUTES *********
// ***************************
module.exports = function(app, passport) {
  // *********************************
  // ********** POST Routes **********
  // *********************************
  app.post("/register", authController.signup, passport);
  app.post("/login", authController.login, passport);
};
