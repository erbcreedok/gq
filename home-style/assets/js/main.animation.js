var lastScrollTop = 0;
$(window).on('scroll', function(event) {
    var st = $(this).scrollTop();
    $("header, #top-header").toggleClass('hidden', (lastScrollTop < st && st > 100));
    lastScrollTop = st;
});