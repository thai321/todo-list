// Chech off todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Click on X to delete
$("ul").on ("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation(); // no bubble
});

// append new to do item to the list
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) { // 13 is enter key
        var inputText = $(this).val();
        trashIcon = "<span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" ;
        $("ul").append("<li>" + trashIcon + " " + inputText + "</li>")
        $(this).val('');
    }
});

// Toggle the input when click on the minus-icon
$(".fa-minus").click(function() {
    $("input[type='text']").fadeToggle();
});
