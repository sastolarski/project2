// ********** Dependencies **********

// ********** Handler for user registration **********
exports.register = function(req, res) {
  // Front end needs to deliver user_name and password from the registration form
  var users = {
    username: req.body.username,
    password: req.body.password
  };
  // Query to insert the new user into DB
  connection.query("INSERT INTO users SET ?", users, function(error) {
    if (error) {
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      res.send({
        code: 200,
        success: "user registered sucessfully"
      });
    }
  });
};

// ********** Handler for user login **********
exports.login = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  // Check to see if the user_name already exists
  connection.query(
    "SELECT * FROM users WHERE user_name = ?",
    [username],
    function(error, results) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred"
        });
      } else {
        if (results.length > 0) {
          if (results[0].password === password) {
            res.send({
              code: 200,
              success: "Login sucessfull"
            });
          } else {
            res.send({
              code: 204,
              success: "Username and password does not match"
            });
          }
        } else {
          res.send({
            code: 204,
            success: "Username does not exist"
          });
        }
      }
    }
  );
};
