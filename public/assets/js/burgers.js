// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".update-button").on("click", function (event) {
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("changed devoured to");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // prevent default
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
            // devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".delete-button").on("click", function (event) {
        var id = $(this).data("id");


        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Deleted", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});