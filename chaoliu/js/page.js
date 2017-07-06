$(window).load(function() {
	var isPhone,
		zoomImg = $( '.page8-backimg' ),
		hight,
		videoIframe = $( '.video_iframe' );

	( function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            isPhone = true;
        } else {
            isPhone = false;
        }
    } )();


	function calcPosition() {
		hight = $(window).height();
		$( '.page1,.page3,.boxbg' ).css( 'height', hight + 'px' );
	}



	$(window).resize(function() {
		calcPosition();

		zoomImg.removeClass( 'kenburns' );
		window.setTimeout( function() {
			zoomImg.addClass( 'kenburns' );
		}, 50 );

	});

	calcPosition();

	
	window.setTimeout( function() {
		$( 'body' ).scrollTop( 0 );
	}, 50 );

	var allNeedShowDoms = $( '.block-inner p,dt,dd,.page4-h2,.page4-h3,.page4-p' );

	!isPhone && $( window ).scroll( function() {
		var sTop = $(window).scrollTop(),
			scrollH = sTop + hight,
			newArray = [],
			tmpItem;

		if( allNeedShowDoms.length == 0 ) {
			return;
		}

		$.each( allNeedShowDoms, function( i, item ) {
			tmpItem = $( item );

			if( tmpItem.offset().top <= scrollH ) {
				if( tmpItem.is( 'li' ) ) {
					tmpItem.addClass( 'fadeIn animated' );
				} else if( tmpItem.hasClass( 'page4-h2' ) ) {
					tmpItem.addClass( 'delay-05s fadeInDown animated' );
				} else if( tmpItem.hasClass( 'page4-h3' ) ) {
					tmpItem.addClass( 'delay-05s fadeInUp animated' );
				} else if( tmpItem.hasClass( 'page4-p' ) ) {
					tmpItem.addClass( 'delay-05s fadeInUp animated' );
				} else if( tmpItem.hasClass( 'an-fiu' ) ) {
					tmpItem.addClass( 'delay-05s fadeInUp animated' );
				} else if( tmpItem.hasClass( 'an-no' ) ) {
					
				} else {
					tmpItem.addClass( 'delay-05s fadeInDown animated' );
				}
			} else {
				newArray.push( item );
			}
		} );

		allNeedShowDoms = newArray;
	} );


	function initSlider( flag ) {
		$(".flexslider").flexslider({
			slideshowSpeed: 4000, //展示时间间隔ms
			animationSpeed: 400, //滚动时间ms
			touch: true //是否支持触屏滑动
		});
	}
		
	!isPhone && initSlider();

	if( isPhone ) {
		var swiper = new Swiper('#swiper-container', {
				pagination: '#swiper-pagination',
				nextButton: '#swiper-button-next',
				prevButton: '#swiper-button-prev',
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 0,
				loop: true
			});
			var swiper = new Swiper('#swiper-container1', {
				pagination: '#swiper-pagination1',
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 0,
				loop: true
			});
			var swiper = new Swiper('#swiper-container2', {
				pagination: '#swiper-pagination2',
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 0,
				loop: true
			});
	}

	$( '.load' ).css( { 'display':'none' } );
	
	$("p.pwen").each(function(){
	   var h=$(this).height();
	   $(this).css({"top":+ (414-h)/2 + "px"});
	});
	
	$(".slid").each(function(){
	   var imgh=$(this).find('img').height();
	   $(".swp").css({"top":+ (imgh-27)/2 + "px"});
	});
	
	

	if ( isPhone ) {
		return;
	}

	$( '.page1-title' ).addClass( 'fadeInDownSmall animated' );
	$( '.page1-desc' ).addClass( 'fadeInDown delay-05s animated' );
	$( '.page1-wen' ).addClass( 'fadeInDown delay-1s animated' );
	$( '.page1-bottomp' ).addClass( 'fadeInDown delay-15s animated' );

	
	$(".page5-cent li").hover(
	  function () {
		$(this).find('p').stop().fadeIn("slow");
	  },
	  function () {
		$(this).find('p').stop().fadeOut("slow");
	  }
	);


});	

