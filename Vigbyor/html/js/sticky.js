jQuery(function() {
	// all var
	var totop = jQuery('#totop');
	var bodyScroll = jQuery('html,body');
	var brandblack = jQuery('.navbar-brand.white img.black');
	var brandwhite = jQuery('.navbar-brand.white img.white');
	var headernav = jQuery('header');
	var subheader = jQuery('.subheader');

	if ($('#wpadminbar').length) {
	        $('.navbar-default-white').css('margin', '90px auto');
	     }


	var sticky = (function(){

		var $window, 
			$stickyNav, 
			$stickyParent, 
			stickyPos;

		var init = function(elem, options){
			$window 	       = jQuery(window);
			$stickyNav             = $(elem);
			$stickyParent          = $stickyNav.parent();
			stickyPos              = $stickyNav.offset().top  > 0 && top != 272 ;
			
			_eventHandlers();
		}

		var _stickyValidation = function(){

			var scrollPos = $window.scrollTop();
			
			if((scrollPos && jQuery(window).width() > 1199) >= stickyPos){
				 $stickyNav.addClass('sticky');
				 headernav.addClass('show');
				 brandblack.show();
				 brandwhite.hide();
				 $('.subheader').addClass('show');
				 if ($('#wpadminbar').length) {
	              $('.navbar-default-white').css('margin', '90px auto');
	             }
			}else{
				$stickyNav.removeClass('sticky');
				headernav.removeClass('show');
				$('.subheader').removeClass('show');
				brandblack.hide();
				brandwhite.show();
			}
			if (jQuery(window).width() < 1200) {
	        	brandblack.show();
				brandwhite.hide();
	        }
			if(scrollPos >= 100){
				totop.addClass('show');
			}else{
				totop.removeClass('show');
			}
		}
	    
		var _eventHandlers = function(){
			window.addEventListener('scroll', _stickyValidation);
			jQuery(document).height(_stickyValidation);
		}

		return {
			init: init
		}

	}());

	//Create jquery plugin
	if (window.jQuery) {
	    (function($) {
	        $.fn.sticky = function(options) {
	            this.each(function() {
	                sticky.init(this, options);
	            });
	            return this;
	        };
	    })(window.jQuery);
	}else{
		console.warn("jQuery library not defined");
	}
	  
	 // totop var
	 totop.on("click", function(e) {
	    e.preventDefault();
	    bodyScroll.animate({
	      scrollTop: 0
	    }, 800);
	  });

	// tambahan
	  if ($('#wpadminbar').length) {
	        $('.navbar-default-white').css('margin', '90px auto');
	     }
	     
	var iScrollPos = 0;
	$(window).scroll(function () {
	    var iCurScrollPos = $(this).scrollTop();
	    if (iCurScrollPos > iScrollPos) {
	        if ($('#wpadminbar').length) {
	         $('.navbar-default-white').css('margin', '30px auto');
	        }
	    } else {
	        if ($('#wpadminbar').length) {
	        $('.navbar-default-white').css('margin', '90px auto');
	      }
	    }
	    iScrollPos = iCurScrollPos;
	});
});
$(document).ready(function(){
    $("#owl-logo").owlCarousel({
      loop: true,
      margin: 20,
      nav: false, /* No manual navigation */
      autoplay: true, /* Enable auto-scrolling */
      autoplayTimeout: 2000, /* Scroll every 2 seconds */
      autoplayHoverPause: false, /* Keep scrolling on hover */
      smartSpeed: 1000, /* Smooth transition */
      responsive: {
        0: { items: 2 },
        600: { items: 3 },
        1000: { items: 5 }
      }
    });
  });

//   jQuery(document).ready(function() {
// 	jQuery("#revolution-slider-half").revolution({
// 		sliderType: "standard",
// 		sliderLayout: "auto",
// 		delay: 5000, // 5 seconds for each slide
// 		navigation: {
// 			arrows: { enable: true }
// 		},
// 		responsiveLevels: [1240, 1024, 778, 480], // These control the height for different screen widths
// 		gridwidth: [1240, 1024, 778, 480], // Width for different screens
// 		gridheight: [700, 600, 500, 400], // Height for different screens
// 		autoHeight: "on",
// 		disableProgressBar: "on"
// 	});
// });

$(document).ready(function () {
    // Hide all groups initially
    $(".group1, .group2, .group3").hide();

    $(".group img").hover(
        function () {
            const groupToShow = $(this).data("group");
            $(".group1, .group2, .group3").hide(); // Hide all groups
            $("." + groupToShow).show(); // Show only the hovered group's corresponding div
        },
        function () {
            $(".group1, .group2, .group3").hide(); // Hide all groups when not hovering
        }
    );

    // Also hide when mouse leaves the group container
    $(".group1, .group2, .group3").mouseleave(function () {
        $(".group1, .group2, .group3").hide();
    });
});

$(document).ready(function () {
    // Hide all groups initially
    $(".flex1, .flex2, .flex3").hide();

    $(".flex img").hover(
        function () {
            const flexToShow = $(this).data("flex");
            $(".flex1, .flex2, .flex3").hide(); // Hide all groups
            $("." + flexToShow).show(); // Show only the hovered group's corresponding div
        },
        function () {
            $(".flex1, .flex2, .flex3").hide(); // Hide all groups when not hovering
        }
    );

    // Also hide when mouse leaves the group container
    $(".flex1, .flex2, .flex3").mouseleave(function () {
        $(".flex1, .flex2, .flex3").hide();
    });
});

$(document).ready(function () {
    // Hide all wall groups initially
    $(".wall1, .wall2, .wall3").hide();

    $(".wall img").hover(
        function () {
            const wallToShow = $(this).data("group");
            $(".wall1, .wall2, .wall3").hide(); // Hide all groups
            $("." + wallToShow).show(); // Show only the hovered group's corresponding div
        },
        function () {
            $(".wall1, .wall2, .wall3").hide(); // Hide all groups when not hovering
        }
    );

    // Also hide when mouse leaves the group container
    $(".wall1, .wall2, .wall3").mouseleave(function () {
        $(".wall1, .wall2, .wall3").hide();
    });
});
