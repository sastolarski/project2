function logout() {
  $.ajax("/logout", {
    type: "GET"
  }).then(function() {
    window.location.href = "/logout";
  });
}

function upperbody() {
  var exercises = { exercise: ["1", "2", "3"] };
  $.ajax("/upperbody", {
    type: "POST",
    data: exercises
  }).then(function() {
    window.location.href = "/upperbody";
  });
}

function lowerbody() {
  var exercises = { exercise: ["11", "22", "13"] };
  $.ajax("/upperbody", {
    type: "POST",
    data: exercises
  }).then(function() {
    window.location.href = "/lowerbody";
  });
}

// Ensure the page is loaded before beginning
$(document).ready(function() {
  $("html").on("click", ".logout", function(event) {
    event.preventDefault();
    logout();
  });
  $("html").on("click", ".upperbody", function(event) {
    event.preventDefault();
    upperbody();
  });
  $("html").on("click", ".lowerbody", function(event) {
    event.preventDefault();
    lowerbody();
  });
});
