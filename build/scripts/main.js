$(document).ready(function() {

    
    // AOS js init
    AOS.init({
      once: true
    });
    window.addEventListener('resize', event => {
      AOS.refresh();
    }, true);
   



    // mobile menu script
    $('.burger-menu').on('click', function(){
        $('.mobile-menu').toggleClass("active");
        $('.background-mobile').toggleClass("bgactive");
    });
    $('.close').on('click', function(){
        $('.mobile-menu').removeClass("active");
        $('.background-mobile').removeClass("bgactive");
    });


    $('.mobile-menu__item').on('click', function () {
      if ($(window).width() < 1180) {
        $('.mobile-menu').removeClass('active');
        $('.background-mobile').removeClass("bgactive");
        $('.popup').fadeOut();
      }
  })

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
      }, true);

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
        } else {
          $(this).attr('placeholder', 'Телефон:');
        }
      })

    // infobank drop-down menu code
      $('.infobank__title').click(function() {
        $(this).toggleClass('open').next().slideToggle();
        $('.infobank__title').not(this).removeClass('open').next().slideUp();
        $('.infobank__arrow', this).toggleClass('arrow-up');
      }) 

});


  //pop up functions
    function popup(e) {
      $('.background-mobile').addClass("bgactive");
      $('.background-mobile').fadeIn('fast');
      $('.popup').fadeIn();
    }


    $('.popup-close').on('click', function(){
      $('.popup').fadeOut();
      $('.background-mobile').removeClass("bgactive");
    });

    $('.popupWindow').on('click', function(e) {
      popup(this);
      e.stopPropagation();
    })

//submenu code
    $('#dom-menu').on('mouseover', function(e) {
      $('.firstlevel').addClass('active');
    })
    $('#dom-menu').on('mouseleave', function(e) {
      $('.firstlevel').removeClass('active');
    })

  ////**** SCROLL TO SECTIONS FROM NAV ****////

let navLinks = document.querySelectorAll('.nav__item a');

navLinks.forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault();

}))

let mobNavLinks = document.querySelectorAll('.mobile-menu__item a');

mobNavLinks.forEach(element => element.addEventListener('click', (e) => {
    e.preventDefault();

}))


document.querySelectorAll(".nav-main").forEach(function(e) {
  console.log(e);
e.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".header"
        }
    })
})
})

document.querySelectorAll(".nav-reputation").forEach(function(e) {
  console.log(e);
e.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".reputation"
        }
    })
})
})

document.querySelectorAll(".nav-fue").forEach(function(e) {
  console.log(e);
e.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".fue"
        }
    })
})
})

document.querySelectorAll(".nav-change").forEach(function(e) {
  console.log(e);
e.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".change"
        }
    })
})
})

document.querySelectorAll(".nav-infobank").forEach(function(e) {
  console.log(e);
e.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".infobank"
        }
    })
})
})

document.querySelectorAll(".nav-cost").forEach(function(e) {
  console.log(e);
e.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".cost"
        }
    })
})
})

document.querySelectorAll(".nav-remember").forEach(function(e) {
  console.log(e);
e.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".remember"
        }
    })
})
})

document.querySelectorAll(".nav-footer").forEach(function(e) {
  console.log(e);
e.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: ".footer"
        }
    })
})
})

//*** UP BUTTON CODE ***//
$(window).scroll(function () {
  if ($(this).scrollTop() > 780) {
      $('#up-btn').fadeIn();
  } else $('#up-btn').fadeOut();
});

document.getElementById("up-btn").addEventListener("click", () => {
  gsap.to(window, {
      duration: .5,
      scrollTo: {
          y: ".header"
      }
  })
})
//*** UP BUTTON CODE END***//



////**** SCROLL TO SECTIONS FROM NAV END****////