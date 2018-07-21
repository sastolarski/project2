// **********************************
// ********** DEPENDENCIES **********
// **********************************
require("dotenv").load();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var express = require("express");
var passport = require("passport");
var session = require("express-session");

// For Express
var app = express();
var PORT = process.env.PORT || 3000;

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(
  session({
    secret: process.env.secret, // session secret
    resave: process.env.resave,
    saveUninitialized: process.env.saveUninitialized
  })
);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// For Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// For MySQL
var syncOptions = { force: false };
if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}

// ****************************
// ********** MODELS **********
// ****************************
var models = require("./models");

// ***************************
// ********** ROUTES *********
// ***************************
require("./routes/auth.js")(app, passport);

// ********************************
// ********** STRATEGIES **********
// ********************************
require("./config/passport/passport.js")(passport, models.user);

// Test Route
app.get("/", function(req, res) {
  res.send("Welcome to Passport with Sequelize try /register and /login");
});

////////////////////////////////////
////////// Sync and Start //////////
////////////////////////////////////
models.sequelize
  .sync(syncOptions)
  .then(function() {
    console.log("Nice! Database looks fine");
    // Start Server
    app.listen(PORT, function(err) {
      if (!err) {
        console.log(
          "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
          PORT,
          PORT
        );
      }
      console.log(err);
    });
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });
