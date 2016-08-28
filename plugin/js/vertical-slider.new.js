(function($) {

    var plugin = {};

    var defaults = {
        speed: 300,
        navigation: true

        //расшиирить эти возможности
    }

  $.fn.verticalSlider = function(options){

      // Adds support for multiple carousels on one page
      if(this.length == 0) return this;

      // support mutltiple elements
      if(this.length > 1){
          this.each(function(){$(this).verticalSlider(options)});
          return this;
      }

      // create a namespace to be used throughout the plugin
      var slider = {};
      // set a reference to our slider element
      var el = this;
      plugin.el = this;

      /* куда это нах писать ? */
      var
          count = el.find('.slide').length, //count of slides
          width = $(this).find('.slide').width(),
          height = $(this).find('.slide').height();
          slidesHeight = count * height, //height all
          slidesWidth = width, //width
          slideHeight = height  //height of slide

      /**
       * Initializes namespace settings to be used throughout plugin
       */
      var init = function(){
          // merge user-supplied options with the defaults
          slider.settings = $.extend({}, defaults, options);

          // initialize the controls object
          slider.controls = {};

          setup();
      }

      /**
       * Performs all DOM and CSS modifications
       */
      var setup = function() {
          el.css({
              'width': slidesWidth,
              'height': slideHeight
          });

          el.find('#carousel').css({
              'width': slidesWidth,
              'height': slidesHeight
          });

          if(defaults.navigation) {
              appendControls();
          }
      }

      /**
       * Appends start / stop auto controls to the controls element
       */
      var appendControls = function() {
            // create
          slider.controls.next = $('<span class="up-nav"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>');
          slider.controls.prev = $('<span class="down-nav"> <i class="fa fa-arrow-up" aria-hidden="true"></i></span>');

          // bind click actions to the controls
          slider.controls.next.bind('click', clickNextBind);
          slider.controls.prev.bind('click', clickPrevBind);

            // append
          el.append(slider.controls.next);
          el.append(slider.controls.prev);

      }

      var pix = 0;  /* куда это писать что бы было правильно? */

      var clickNextBind = function() {
          if (pix === slidesHeight || pix === (slidesHeight - height)) {
              return;
          }

          pix = pix + height;
          slideUp(pix);
      }

      var clickPrevBind = function() {
          if (pix === 0) {
              console.log('return');
              return;
          }

          pix = pix - height;

          slideUp(pix);

      }

      // function to do sliding up/down
      function slideUp(pixels) {

         $('#carousel').animate({
              "top": '-' + pixels + 'px'
          }, defaults.speed);
      }
        init();
       return this;
  }
})(jQuery);