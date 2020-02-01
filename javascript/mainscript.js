$(document).ready(function () {

  // NAVBAR TOGGLE OPEN AND CLOSE
  $('.menu').on('click', function () {
    $(this).toggleClass('open');
    $('.navbar').toggleClass('open');
  });

  $('.navbar .link').on('click', function () {
    $('.menu').removeClass('open');
    $('.navbar').removeClass('open');
  });

// SMOOTH SCROLL EFFECT
  const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 1500
  });

//RETURN TO TOP BUTTTON
  const backtotop = document.querySelector("#backtotop");
  backtotop.addEventListener("click", function () {
// NON JQUERY CODE FOR SCROLL BACK TO TOP //
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth"
    // });
// JQUERY CODE FOR SCROLL BACK TO TOP //
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
// RETURN TO TOP BUTTTON
  // $('backtotop').on('click', function () {
  //   $('html, body').animate(keyframes: {
  //     scrollTop: 0
  //   }, options: 2000);
  // });

// ANIMATIONS
  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
  });
  
});
