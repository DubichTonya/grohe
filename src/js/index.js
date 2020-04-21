$(document).ready(function () {

  $(".slider-one").owlCarousel({
    item: 1,
    nav: false,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      }
    },

    touchDrag: true,
  });

  $(".slider-two").owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    margin: 30,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },

      400: {
        items: 1,
      },

      448: {
        items: 2,
      },

      768: {
        items: 3,
      },

      992: {
        items: 4,
      }
    },

    touchDrag: true,
  });

  $(".slider-three").owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    margin: 30,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },

      400: {
        items: 1,
      },

      448: {
        items: 2,
      },

      768: {
        items: 3,
      },

      992: {
        items: 4,
      }
    },

    touchDrag: true,
  });

  $(".slider-four").owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    margin: 30,
      loop: true,
    responsive: {
      0: {
        items: 1,
      },

      400: {
        items: 1,
      },

      448: {
        items: 2,
      },

      768: {
        items: 3,
      },

      992: {
        items: 4,
      }
    },

    touchDrag: true,
  });

});
