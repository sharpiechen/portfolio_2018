// Your scripts go here.

console.log('hello world!');

$("#backtotop").click(function() {
    $('html, body').animate({
        scrollTop: $("#thisistop").offset().top
    }, 4000);
});
