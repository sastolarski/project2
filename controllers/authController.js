// *********************************
// ********** Controllers **********
// *********************************
var exports = (module.exports = {});

// **************************************
// ********** POST Controllers **********
// **************************************
exports.signup = function(req, res, passport) {
  passport.authenticate("local-signup", {
    successRedirect: "/mainpage",
    failureRedirect: "/"
  })
};

exports.login = function(req, res, passport) {
  passport.authenticate("local-signin", {
    successRedirect: "/mainpage",
    failureRedirect: "/"
  })
};
