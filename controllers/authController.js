// *********************************
// ********** Controllers **********
// *********************************
var exports = (module.exports = {});
// *************************************
// ********** GET Controllers **********
// *************************************
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

// **************************************
// ********** POST Controllers **********
// **************************************

// Controller for the signup POST route
exports.signup = function() {
  passport.authenticate("local-signup", {
    successRedirect: "/mainpage",
    failureRedirect: "/"
  });
};

//controller for the login POST route
exports.login = function() {
  passport.authenticate("local-signin", {
    successRedirect: "/mainpage",
    failureRedirect: "/"
  });
};
