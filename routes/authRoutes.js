// **********************************
// ********** DEPENDENCIES **********
// **********************************
var authController = require("../controllers/authController.js");

// ***************************
// ********** ROUTES *********
// ***************************
module.exports = function(app) {
  // ********************************
  // ********** GET Routes **********
  // ********************************
  app.get("/logout", authController.logout); // Route for logout and return to the login page

  // *********************************
  // ********** POST Routes **********
  // *********************************
  app.post("/register", authController.signup);
  app.post("/login", authController.login);
};
