// **********************************
// ********** DEPENDENCIES **********
// **********************************
var authController = require("../controllers/authcontroller.js");

// ***************************
// ********** ROUTES *********
// ***************************
module.exports = function(app, passport) {
  // app.get("/register", cors(corsOptions), authController.register);
  // app.get("/login", cors(corsOptions), authController.login);
  // app.get("/dashboard", cors(corsOptions), isLoggedIn, authController.dashboard);
  // app.get("/logout", cors(corsOptions), authController.logout);

  app.get("/register", authController.register);
  app.get("/login", authController.login);
  app.get("/dashboard", isLoggedIn, authController.dashboard);
  app.get("/logout", authController.logout);
  app.post(
    "/register",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",
      failureRedirect: "/register"
    })
  );
  app.post(
    "/login",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",
      failureRedirect: "/login"
    })
  );
  // Protects the dashboard route to only allow signed in user
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  }
};
