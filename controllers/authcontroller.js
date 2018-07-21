var exports = (module.exports = {});

// Controller for the register route
exports.register = function(req, res) {
  res.render("testregister");
};

// Controller for the login route
exports.login = function(req, res) {
  res.render("testlogin");
};

// Controller for the dashboard route
exports.dashboard = function(req, res) {
  res.render("testdashboard");
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
