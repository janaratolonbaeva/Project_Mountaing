$('#popup-open').click(function () {
    $('.wrap-popup').fadeIn();
});
$('.wrap-popup').click(function () {
    $('.wrap-popup').fadeOut()
});


function setupSmoothScroll() {
    function scrollTo(target) {
        $('html, body').animate(
            {scrollTop: target.offset().top},
            500
        );
    }

    $('a[href="#main-slide"]').click(function () {
        scrollTo($("#promo"));
    });

    $('a[href="#gallery"]').click(function () {
        scrollTo($("#gallery"));
    });

    $('a[href="#clients-say"]').click(function () {
        scrollTo($("#clients-say"));
    });

    $('a[href="#contacts"]').click(function () {
        scrollTo($("#contacts"));
    });
}

$(document).ready(function () { 
	setupSmoothScroll();
});

