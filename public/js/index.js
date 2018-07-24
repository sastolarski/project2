$(document).ready(function() {
  $("#loginPage").hide();
  //login and sign up
  $("#signup").on("click", function(event) {
    event.preventDefault();
    if (
      !$("#newUser")
        .val()
        .trim() ||
      !$("#password1").val()
    ) {
      alert("Please enter valid information!");
    } else {
      var newUser = {
        newName: $("#newUser")
          .val()
          .trim(),
        newPassword: $("#password1")
          .val()
          .trim()
      };

      $.ajax("/api/signup", {
        type: "POST",
        data: newUser
      }).then(function(data) {
        window.location.replace(data.url);
      });
    }
  });

  $("#login1").on("click", function() {
    $("#signupPage").hide();
    $("#loginPage").show();
  });

  $("#login").on("click", function() {
    if (
      !$("#username")
        .val()
        .trim() ||
      !$("#password").val()
    ) {
      alert("Please enter valid information!");
    } else {
      $.ajax("/api/login", {
        type: "GET",
        data: {
          username: $("#username"),
          password: $("#password")
        }
      }).then(function(data) {
        window.location.replace(data.url);
      });
    }
  });

  //Log out event
  $("#logout").on("click", function() {
    $.ajax("/api/logout", {
      type: "UPDATE",
      data: {
        username: $("#username").text()
      }
    }).then(function(data) {
      window.location.replace(data.url);
    });
  });

  //Modals
  //ask user enter weight, reps, sets
  // $("#exampleModal").on("show.bs.modal", function(event) {
  //   var button = $(event.relatedTarget); // Button that triggered the modal
  //   // var recipient = button.data('whatever'); // Extract info from data-* attributes
  //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //   var modal = $(this);
  //   // modal.find('.modal-title').text('New message to ' + recipient);
  //   // modal.find('.modal-body input').val(recipient);
  // });

  $("#addBtn").on("click", function(event) {
    event.preventDefault();
    var newHistory = {
      sets: $("#sets")
        .val()
        .trim(),
      reps: $("#reps")
        .val()
        .trim(),
      weightUsed: $("#weightUsed")
        .val()
        .trim()
    };

    // Send the PUT request.
    $.ajax("/api/history", {
      type: "POST",
      data: newHistory
    }).then(function(data) {
      console.log(data);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //track history
  $("#track").on("click", function() {
    $.ajax("/api/history", {
      type: "GET",
      data: {
        username: $("#username").text()
      }
    }).then(function(data) {
      console.log(data);
      location.reload();
    });
  });
});
