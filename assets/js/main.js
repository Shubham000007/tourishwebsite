$(document).ready(function () {
  // SLick SLiders js
  $(".sliders").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="caret-left"><i class="fas fa-arrow-left"></i></div>',
    nextArrow: '<div class="caret-right"><i class="fas fa-arrow-right"></i></div>'
  });
  // SLick SLiders js Ends

  document.getElementById('banner__video').play();


  //document Ready Ends
});
