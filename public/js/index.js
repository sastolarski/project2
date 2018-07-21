$(document).ready(function() {
  //login and sign up
  $(".form")
    .find("input, textarea")
    .on("keyup blur focus", function(e) {
      var $this = $(this),
        label = $this.prev("label");

      if (e.type === "keyup") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.addClass("active highlight");
        }
      } else if (e.type === "blur") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.removeClass("highlight");
        }
      } else if (e.type === "focus") {
        if ($this.val() === "") {
          label.removeClass("highlight");
        } else if ($this.val() !== "") {
          label.addClass("highlight");
        }
      }
    });

  $(".tab a").on("click", function(e) {
    e.preventDefault();

    $(this)
      .parent()
      .addClass("active");
    $(this)
      .parent()
      .siblings()
      .removeClass("active");

    target = $(this).attr("href");

    $(".tab-content > div")
      .not(target)
      .hide();

    $(target).fadeIn(600);
  });

  //ask user enter weight, reps, sets

  // Get the modal
  var modal = $("#myModal");

  // Get the button that opens the modal
  var btn = $(".myBtn");

  // Get the <span> element that closes the modal
  var span = $(".close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  //see the history
  $(function() {
    $("#addBtn").on("click", function(event) {
      event.preventDefault();
      var newHistory = {
        id: $(this).attr("id-data"),
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
  });
});
