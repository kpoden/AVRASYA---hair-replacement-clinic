$(document).ready(function() {

    // mobile menu script
    $('.burger-menu').on('click', function(){
        $('.mobile-menu').toggleClass("active");
        $('.burger-menu').toggleClass("close");
        $('.background-mobile').toggleClass("bgactive");
    });
    $(document).on('click', function(e) {
        if ($('.background-mobile').is(e.target)){
          $('.mobile-menu').removeClass('active');
          $('.burger-menu').removeClass("close");
          $('.background-mobile').removeClass("bgactive");
        }
        e.stopPropagation();
      });
      // end of mobile menu script

      //before and after slider
      $.fn.BeerSlider = function ( options ) {
        options = options || {};
        return this.each(function() {
          new BeerSlider(this, options);
        });
      };
      $('.beer-slider').BeerSlider({start: 50});
      //end of before and after slider


      //video slider script

      window.addEventListener('resize', event => {
        sliderInit();
      }, false);

      window.onload = sliderInit();

        function checkWidth(){
          if (window.innerWidth<688) {
            return true;
          } else {
            return false;
          }
        };

        function sliderInit() {
          if(checkWidth()){
            $('.small-videos').addClass('video-slider');
          } else {
            $('.small-videos').removeClass('video-slider');
          }
        }




      $('.video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        draggable: true,
        prevArrow: $('.prev_arrow'),
        nextArrow: $('.next_arrow'),
        dots: true
      });

      //end of video slider script

});