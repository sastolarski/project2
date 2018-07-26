function upperbody() {
  console.log("clicked");
  window.location.href = "/upperbody";
  // $.ajax("/upperbody", {
  //   type: "GET"
  // }).then(function() {
  // })
}

// function lowerbody() {}

// function history() {}

// Ensure the page is loaded before beginning
$(document).ready(function() {
  $("html").on("click", ".logout", function(event) {
    event.preventDefault();
    logout();
  });
  $("html").on("click", "#upperbody", function(event) {
    event.preventDefault();
    upperbody();
  });
  $("html").on("click", "#lowerbody", function(event) {
    event.preventDefault();
    lowerbody();
  });
  $("html").on("click", "#history", function(event) {
    event.preventDefault();
    history();
  });
});
