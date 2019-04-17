

$("#hero-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});

$("#to-the-top").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
});