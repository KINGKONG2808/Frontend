$(document).ready(function() {
    setSubscrible('vuhung2881999@gmail.com');
    setDvqc('K2');

    $("#logo").dblclick(function() {
        $(this).hide();
    });

    $("#logo").fadeIn(3000);

    //dung pesudo cho class (hover)
    $("#header nav ul li a").mouseenter(function() {
        $(this).css("background-color", "#ffeb3b");
    });
    $("#header nav ul li a").mouseleave(function() {
        $(this).css("background-color", "#EEE");
    });
});