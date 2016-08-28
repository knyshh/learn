(function($) {

  $.fn.verticalSlider = function(params){
      var $container         = this,//wrap-carousel.verticalSlider();
          $items             = $('.slide'),
          $carousel          = $('#carousel'),
          wrapCarousel = $('.wrap-carousel'),
          upNav = $('.up-nav'),
          downNav = $('.down-nav');

      params = $.extend({
          width: $(this).find('.slide').width(),
          height: $(this).find('.slide').height(),
          speed: 300,
          //interval: 2000,
          navigation: true
      }, params);

      var count = $(this).find('.slide').length; //count of slides
      var slidesHeight = count * params.height; //height all
      var slidesWidth = params.width; //width
      var slideHeight = params.height; //height of slide


      $(this).css({
          'width': slidesWidth,
          'height': slideHeight
      });

      $(this).find($carousel).css({
          'width': slidesWidth,
          'height': slidesHeight
      });

      //click events
      // some properties
      var pix = 0;

      upNav.on('click' , function() {
          // slide up
          if (pix === slidesHeight || pix === (slidesHeight - params.height)) {
              console.log('return');
              return;
          }

          pix = pix + params.height;
          slideUp(pix);
      });

      downNav.on('click', function() {
          // slide up
          if (pix === 0) {
              console.log('return');
              return;
          }

          pix = pix - params.height;

          slideUp(pix);
      });

      // function to do sliding up/down
      function slideUp(pixels) {
          console.log('up');

         $('#carousel').animate({
              "top": '-' + pixels + 'px'
          }, params.speed);
      }

       return this;
  };
})(jQuery);