$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("eaten");
  
      var updateAvail = {
        devoured: newState
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updateAvail
      }).then(
        function() {
          console.log("changed devoured to", newState);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var Burger = {
        burger_name: $("#newBurg").val().trim(),
        devoured: $("[name=devour]:checked").val().trim()
        
      };
      console.log(Burger, "new burger to be added")
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: Burger
      }).then(
        function() {
          console.log(Burger, "added");
          location.reload();
        }
      ).catch(function(err){
        console.log(err)
      })
    })
        
  });
  