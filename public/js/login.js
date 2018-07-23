function login() {
  var login = {
    username: $("#username")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim()
  };
  $.ajax("/login", {
    type: "POST",
    data: login
  }).then(function() {
    window.location.href = "/mainpage";
  });
}

function register() {
  var register = {
    username: $("#username")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim()
  };
  $.ajax("/register", {
    type: "POST",
    data: register
  }).then(function() {
    window.location.href = "/mainpage";
  });
}

// Ensure the page is loaded before beginning
$(document).ready(function() {
  //
  $(".login").on("click", function(event) {
    event.preventDefault();
    login();
  });
  $(".register").on("click", function(event) {
    event.preventDefault();
    register();
  });
});
