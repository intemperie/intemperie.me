(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

// !Initializing the works show!
$(window).on("load scroll",function(e){
	$(".works").each(function(i, el) {
		var el = $(el);
		
		if (el.visible(true)) {
			el.addClass("visible");
		}
	});
	
	$(".slideshow").each(function(i, es) {
		var es = $(es);
		
		if (es.visible(true)) {
			es.children('li').each(function() {
				es.children('li:first-child').addClass('active');
				$(this).on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
					$(this).removeClass('active')
						.next()
						.addClass('active')
						.end()
						.appendTo(es);
				});
			});
		}
	});
});


var toggleSlide = function(){
	$(".brands li.active").removeClass();
	$('.brands li:random').addClass('active');

//  $(".brands li.active").removeClass()
//   .next().add(".brands li:first").last().addClass("active");
}
setInterval(toggleSlide, 2000);