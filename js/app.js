var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// owl-carosoul

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

//isotope

$(document).ready(function () {
  // init Isotope
  var $grid = $(".show").isotope({
    // options
  });
  // filter items on button click
  $(".menu-item").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
  // filter items on button active
  $(".menu-item").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// wow-animate

//wow

new WOW().init();

//slick-slider

$(".main-banner").slick({
  dots: true,
  navs: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//</script> stick-up

//initiating jQuery
jQuery(function ($) {
  $(document).ready(function () {
    //enabling stickUp on the '.navbar-wrapper' class
    $(".navbar-wrapper").stickUp();
  });
});

// WoW.js

new WOW().init();
