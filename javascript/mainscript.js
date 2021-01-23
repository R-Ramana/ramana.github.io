var tl = new TimelineLite();
tl.staggerFrom(".topics", 3, {
    css: { transform: "scale(0)", top: "60%", left: "50%" },
    ease: Elastic.easeOut
}, 0.3);

$(document).ready(function() {

    // LOADING PAGE
    $(window).on("load", function() {
        $(".loader-wrapper").fadeOut("fast");
        $("#name").addClass("animateName");
        $("#sub").addClass("animateSub");
        $('body').removeClass('loading');
    });

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