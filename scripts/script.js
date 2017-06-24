console.log('hello')

$( "#hamburger" ).hide();
$( "#cross" ).click(function() {
$( ".mainnavigation" ).slideToggle( "slow", function() {
$( "#cross" ).hide();
$( "#hamburger" ).show();
});
});

$( "#hamburger" ).click(function() {
$( ".mainnavigation" ).slideToggle( "slow", function() {
$( "#hamburger" ).hide();
$( "#cross" ).show();
});
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

