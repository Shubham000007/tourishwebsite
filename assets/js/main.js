$(document).ready(function () {
  // SLick SLiders js
  $(".sliders").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<div class="caret-left"><i class="fas fa-arrow-left"></i></div>',
    nextArrow:
      '<div class="caret-right"><i class="fas fa-arrow-right"></i></div>',
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
    ]
  });

  $(".pack_sliders").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<div class="caret-left"><i class="fas fa-arrow-left"></i></div>',
    nextArrow:
      '<div class="caret-right"><i class="fas fa-arrow-right"></i></div>',
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
    ]
  });
  // SLick SLiders js Ends

  $(".contact").on("click", () => {
    $("#contact__modal").modal("show");
  });

  //document Ready Ends
});
