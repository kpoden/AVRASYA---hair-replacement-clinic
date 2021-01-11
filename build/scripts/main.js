$(document).ready(function() {

    
    // wow js init
      $(function(){
        new WOW().init(); 
      });

    // mobile menu script
    $('.burger-menu').on('click', function(){
        $('.mobile-menu').toggleClass("active");
        $('.background-mobile').toggleClass("bgactive");
    });
    $('.close').on('click', function(){
        $('.mobile-menu').removeClass("active");
        $('.background-mobile').removeClass("bgactive");
    });

    $(document).on('click', function(e) {
        if ($('.background-mobile').is(e.target)){
          $('.mobile-menu').removeClass('active');
          $('.background-mobile').removeClass("bgactive");
          $('.popup').fadeOut();
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



      //video slider script
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

      //header slider owl start
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 8000,
        loop: true,
        dots: false
      });

      $('.svg-arrow-r').on('click', function() {
          owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('.svg-arrow-l').on('click', function() {
          owl.trigger('prev.owl.carousel', [300]);
      })
      //header slider owl end

      $('.consult__fields input').focus( function(){
        $(this).attr('placeholder', ''); 
      })

      $('.consult__fields input').blur( function(){
        if ($(this).attr('id')=='consult_name') {
          $(this).attr('placeholder', 'Ваше имя:');
          console.log(this);
        } else {
          $(this).attr('placeholder', 'Телефон:');
          console.log(111);
        }
      })

    // infobank drop-down menu code
      $('.infobank__title').click(function() {
        $(this).toggleClass('open').next().slideToggle();
        $('.infobank__title').not(this).removeClass('open').next().slideUp();
        $('.infobank__arrow', this).toggleClass('arrow-up');
        console.log(this);
      }) 

});


  //pop up functions
    function popup(e) {
      $('.background-mobile').addClass("bgactive");
      $('.background-mobile').fadeIn('fast');
      $('.popup').fadeIn();
      e.preventDefault();
      console.log(e);
    }


    $('.popup-close').on('click', function(){
      $('.popup').fadeOut();
      $('.background-mobile').removeClass("bgactive");
    });