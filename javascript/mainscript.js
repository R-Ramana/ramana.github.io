var tl = new TimelineLite();
tl.staggerFrom(".topics", 3, {
    css: { transform: "scale(0)", top: "60%", left: "50%" },
    ease: Elastic.easeOut
}, 0.3);

// Intro Animation
var slider_tl = gsap.timeline({ defaults: { ease: "power1.out" } });

slider_tl.to('.intro-text', { y: "0%", duration: 1, stagger: 0.25 });
slider_tl.to('.slider', { y: "-100%", duration: 1.5, delay: 1 });
slider_tl.to('.intro', { y: "-100%", duration: 1 }, "-=1.5");
slider_tl.fromTo('header', { opacity: 0 }, { opacity: 1, duration: .25 });

$(document).ready(function() {
    // NAVBAR TOGGLE OPEN AND CLOSE
    $('.menu').on('click', function() {
        $(this).toggleClass('open');
        $('.navbar').toggleClass('open');
    });

    $('.navbar .link').on('click', function() {
        $('.menu').removeClass('open');
        $('.navbar').removeClass('open');
    });

    // SMOOTH SCROLL EFFECT FOR NAV BAR SCROLL
    const scroll = new SmoothScroll('.navbar a[href*="#"]', {
        speed: 1500
    });

    //RETURN TO TOP BUTTTON
    const backtotop = document.querySelector("#backtotop");
    backtotop.addEventListener("click", function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // ANIMATIONS
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});