function logout() {
  $.ajax("/logout", {
    type: "GET"
  }).then(function() {
    window.location.href = "/logout";
  });
}

// Ensure the page is loaded before beginning
$(document).ready(function() {
  $("html").on("click", ".logout", function(event) {
    event.preventDefault();
    logout();
  });
});
