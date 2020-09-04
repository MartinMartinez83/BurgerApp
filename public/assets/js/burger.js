$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger")
            .val()
            .trim(),
            devoured: 0
        };

        //create post//
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            location.reload();
        });
    });

    //eatburger on click event//
    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("burger devoured");
            location.reload();
        });
    });
    //create delete action//
    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});