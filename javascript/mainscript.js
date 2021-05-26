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
});

(function() {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();