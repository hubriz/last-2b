(function(){

	// Offcanvas Navigation
	var $el = $("#offcanvas").on({
			"init.offcanvas" : function() {
				$(".nav").show();
			}
	});

	$el.offcanvas({
		effect: "slide-in-over",
		overlay: true,
		origin: "right"
	});

	$(".nav-toggle").on("click.offcanvas", function(e) {
		e.preventDefault();
		$el.offcanvas("show");
	});

	$('.nav-closer').on('click',  function(){
			$('.nav').offcanvas('hide');
	});


	// Slicknav
	var mainNav = $('#main-nav');

	mainNav.slicknav({
		prependTo: '#offcanvas',
		label: ''
	});

	mainNav.slicknav('open');



	// ScrollTo
	function scrollThis(href) {

		var href = typeof(href) == "string" ? href : $(this).attr("href");

		// Adjust the value if there's sticky nav on the header
		var fromTop = 0;

		if(href.indexOf("#") == 0) {
			var $target = $(href);

			if($target.length) {
					$('html, body').animate({ scrollTop: $target.offset().top - fromTop });
			 }
		}
	}
	scrollThis(window.location.hash);

	$(".site-wrapper").on("click", "a.scroll-to", scrollThis);


	// Home Featured Content
	var fc = $('#featured-content');

	fc.carousel();

	// HTML5 Video
	var thisVideo = $('featured-video, video');
	thisVideo.on('canplaythrough', function() {
	   this.play();
	});

	// cache vars
  var cmn_video = document.getElementById("featured-video"),
      cmn_playback = document.getElementById("video-control-play"),
      cmn_mute = document.getElementById("video-control-mute");

  // listen for playback
  cmn_playback.addEventListener( "click", function(e) {
    e.preventDefault();
    if (cmn_video.paused) {
      cmn_video.play();
      cmn_playback.innerHTML = "<i class='ion-ios-pause'></i>";
    } else {
      cmn_video.pause();
      cmn_playback.innerHTML = "<i class='ion-ios-play'></i>";
    }
  } );

  // listen for mute/unmute
  cmn_mute.addEventListener( "click", function(e) {
    e.preventDefault();
    if (cmn_video.muted) {
      cmn_video.muted = false;
      cmn_mute.innerHTML = "<i class='ion-volume-medium'></i>";
    } else {
      cmn_video.muted = true;
      cmn_mute.innerHTML = "<i class='ion-volume-mute'></i>";
    }
  } );





	// Tabbed Content
	var tabbedLink = $('.tabs-nav > li > a'),
			tabPane = $('.tab-pane'),
			activeTabPane = $('.tab-pane.active');

	tabPane.hide();
	activeTabPane.show();

	tabbedLink.on('click', function(e){
		e.preventDefault();

		var activeNavSelector = $('.tabs-nav > li.active > a').attr('href'),
				activeNav = $('.tabs-nav > li.active'),
				thisLink = $(this),
				thisTabSelector = thisLink.attr('href');

		activeNav.removeClass('active');

		thisLink.parents('li').addClass('active');

		$(activeNavSelector).removeClass('active');
		$(activeNavSelector).hide();

		$(thisTabSelector).fadeIn(200);
		$(thisTabSelector).addClass('active')


	});



})(window.jQuery);
