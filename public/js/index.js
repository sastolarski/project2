$(document).ready(function() {
  $("#loginPage").hide();

  //login and sign up 
  $("#signup").on("click", function(event){
      event.preventDefault();
      if (!$("#newUser").val().trim() || !$("#password1").val()){
        alert("Please enter valid information!")
      } else {
        var newUser = {
          username: $("#newUser").val().trim(),
          password: $("#password1").val().trim(),
        }
  
        $.ajax("/register",{
          type: "POST",
          data: newUser
        }).then(function(data){
         window.location.href("/mainpage");
       
        });
      }
    });
    
  

    $("#login").on("click", function(){
      if (!$("#username").val().trim() || !$("#password").val().trim()){
        alert("Please enter valid information!")
      } else {
        $.ajax("/login",{
          type: "GET",
          data: {
            username: $("#username").val().trim(),
            password: $("#password").val().trim()
          }
        }).then(function(data){
         window.location.href("/mainpage");
        });
       }
     }); 
  
  //Log out event
    $("#logout").on ("click", function(){
      $.ajax("/logout", {
        type: "GET",
      
      }).then(function(data){
        window.location.href("/logout");
      });
     });


  //add new info to histoy page
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
