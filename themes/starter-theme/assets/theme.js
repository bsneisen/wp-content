function wooSliderAndCarousel() {

  jQuery(document).ready(function($){

    $(window).load(function() {
      // initalize slider first
      $("#carousel").flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 100,
        itemMargin: 10,
        asNavFor: "#slider"
      });
     
      $("#slider").flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        maxItems: 8
      });
    });

  }); // end of WordPress doc ready function

} // end of wooslider function


function wooSlider() {

  jQuery(document).ready(function($){

    $(window).load(function() {   
      $("#slider").flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        smoothHeight: true,
        slideShowSpeed: 9000,
        multipleKeyboard: true,
        touch: true,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next"
      }); // end of slider function
    }); // end of window load function

  }); // end of WordPress doc ready function

} // end of wooslider function


function sliderBX(){ 
    jQuery(document).ready(function($){
        $('.bxslider').bxSlider({
          infiniteLoop: false,
            hideControlOnEnd: true,
            adaptiveHeight: true,
            responsive: true
        });
    }); // end of WordPress doc ready function
} // end of sliderBX function


(function() { //wallopSlider function
    'use strict';

    // New isntance of WallopSlider
    var photoSlider = new WallopSlider('.photo-slider');

})();

function glideSlider(){ 
    jQuery(document).ready(function($){
        $('.slider').glide({
          autoplay: 5000,
          arrows: 'body',
          navigation: 'body',
          arrows: true
        });
    }); // end of WordPress doc ready function
} // end of glideSlider function

