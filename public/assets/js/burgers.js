$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: !newDevoured,
    };

    // SEND THE PUT REQUEST
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed devoured to", newDevouredState);
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devour: $("[name=devoured]:checked").val().trim(),
    };

    // SEND THE POST REQUEST
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // SEND THE DELETE REQUEST
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});