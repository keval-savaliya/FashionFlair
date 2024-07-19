import WOW from 'wowjs'
import 'animate.css'
(function ($){
    "use strict";

// Initiate the wowjs
new WOW().init()


// Navbar on scrolling
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.navbar').fadeIn('slow').css('display', 'flex');
    } else {
        $('.navbar').fadeOut('slow').css('display', 'none');
    }
});


//Smooth scrolling on the navbar links
$(".navbar-nav a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 45
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.navbar-nav').length) {
            $('.navbar-nav .active').removeClass('active');
            $(this).closest('a').addClass('active');
        }
    }
});
})();