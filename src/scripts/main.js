$(document).ready(function() {

    // mobile menu script
    $('.burger-menu').on('click', function(){
        $('.mobile-menu').toggleClass("active");
        $('.burger-menu').toggleClass("close");
        $('.background-mobile').toggleClass("bgactive");
    });
    $(document).on('click', function(e) {
        console.log($('.background-mobile').is(e.target)); 
        if ($('.background-mobile').is(e.target)){
          $('.mobile-menu').removeClass('active');
          $('.burger-menu').removeClass("close");
          $('.background-mobile').removeClass("bgactive");
        }
        e.stopPropagation();
      });
});