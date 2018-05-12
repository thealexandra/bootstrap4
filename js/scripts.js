$(document).ready(function () {
    var ww = $(window) .width();
    if (ww <= 575) {
        $('.header') .on('click', '.nav', function () {
        $('.mobile-navigation') .slideToggle(200);
        // console.log('test');
    });
    }
});