$(document).ready(function(){
  $('#menu_toggler').click(function(){
    $('#main_menu').toggle();
  });

  $('.slideshow').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      }
    ]
  });
});
