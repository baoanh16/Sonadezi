// viết script, gọi function ở đây
$(document).ready(function () {
	$('.news-detail-page img').each(function (e) {
		if ($('img')[e].naturalWidth === 0) {
			$($('img')[e]).hide()
		}
	})
	var PageBanner = new Swiper('.home-banner .swiper-container', {
		speed: 1200,
		loop: true,
		pagination: {
			el: '.home-banner .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
		on: {
			init: function () {
				$('.home-banner .swiper-slide.video').height($('.home-banner .swiper-slide img').height())
				if (this.realIndex === 0) {
					setTimeout(function () {
						$('.home-banner .swiper-next-button').trigger('click');
						setInterval(function () {
							$('.home-banner .swiper-next-button').trigger('click');
						}, 5000)
					}, 17000);
				} else {
					setInterval(function () {
						$('.home-banner .swiper-next-button').trigger('click');
					}, 5000)
				}
			}
		}
	})

	var vid = $('.home-banner .swiper-slide video')
	swiper.on('slideChange', function () {
		if (swiper.activeIndex == 0) {
			vid.get(0).play()
		} else {
			vid.get(0).pause()
		}
	});
	vid.onplay = function () {
		swiper.autoplay.stop()
	};
	vid.onended = function () {
		swiper.autoplay.start()
	};
	var PageBanner = new Swiper('.page-banner .swiper-container', {
		autoplay: {
			delay: 4500,
			disableOnInteraction: true,
		},
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		loop: true,
	})



	$('.cc-header .language .current').click(function () {
		$(this).siblings('.dropdown').slideToggle(250)
	})

	var headerBreakpoint = matchMedia("(max-width: 991px)");
	function addOverlay(headerBreakpoint) {
		if (headerBreakpoint.matches) {
			$('#wrapper').append('<div class="overlay" id="overlay"></div>')
		} else {
			$('.overlay').remove();
		}
	}
	headerBreakpoint.addListener(addOverlay)
	addOverlay(headerBreakpoint)
	$('.menu-toggle-button').on('click', function () {
		$('#overlay').fadeToggle();
		$('.cc-header .menu-wrapper').toggleClass('open')
		$('html').toggleClass('hide')
	})
	$('body').on('click', '#overlay', function () {
		$(this).hide()
		$('.cc-header .menu-wrapper').removeClass('open')
		$('html').removeClass('hide')
	})
	$(window).resize(function () {
		$('#overlay').hide()
		$('.cc-header .menu-wrapper').removeClass('open')
		$('html').removeClass('hide')
	})
	// var scrollTopPosition = 0;
	if (window.matchMedia('(min-width: 992px)').matches === true) {
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 0) {
				$('.logo-wrapper').addClass('scrollDown')
				$('.menu-wrapper .top').slideUp()
				// scrollTopPosition = $(window).scrollTop()
			} else {
				$('.logo-wrapper').removeClass('scrollDown')
				$('.menu-wrapper .top').slideDown()
				// scrollTopPosition = $(window).scrollTop()

			}
		})
	}
	function HeaderHover() {
		if ($('#customHover ul li.active').length === 0) {
			$('#customHover').mouseenter(function () {
				$('#hoverThumb').show()
			}).mouseleave(function () {
				$('#hoverThumb').hide()
			})
		}
		if ($('#customHover').length > 0) {
			if ($('#customHover ul li.active').length > 0) {
				var widthOfThumbs = $('#customHover ul li.active').innerWidth()
				$('#hoverThumb').show().width(widthOfThumbs)
				let positionOfThumb = $('#customHover ul li.active').offset().left - $('#customHover').offset().left
				$('#hoverThumb').css({
					"left": positionOfThumb,
					"width": widthOfThumbs
				})
			}
		}
		$('#customHover ul li').each(function () {
			$(this).mouseenter(function () {
				let positionOfThumb = $(this).offset().left - $('#customHover').offset().left
				let widthOfThumbs = $(this).innerWidth()
				$('#hoverThumb').css({
					"left": positionOfThumb,
					"width": widthOfThumbs
				})
			}).mouseleave(function () {
				// tra ve vi tri cu 
				if ($('#customHover ul li.active').length > 0) {

					let positionOfThumb = $('#customHover ul li.active').offset().left - $('#customHover').offset().left
					let widthOfThumbs = $('#customHover ul li.active').innerWidth()
					$('#hoverThumb').css({
						"left": positionOfThumb,
						"width": widthOfThumbs
					})
				}
			}).click(function () {
				// set vi tri cua scrollbar-thumb khi click
				$('#customHover ul li').not(this).removeClass('active')
				$(this).addClass('active')
				let positionOfThumb = $(this).offset().left - $('#customHover').offset().left
				let widthOfThumbs = $('#customHover ul li.active').innerWidth()
				$('#hoverThumb').css({
					"left": positionOfThumb,
					"width": widthOfThumbs
				})
			})
		})
	}


	var footerSlider = new Swiper('.cc-footer .swiper-container', {
		spaceBetween: 20,
		speed: 1000,
		slidesPerView: 6,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.cc-footer .swiper-button-next',
			prevEl: '.cc-footer .swiper-button-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},

		}
	})

	if ($('#applyToggle').length > 0) {

		$('#applyToggle').click(function () {
			$('.job-page .textbox .apply-form').slideToggle()
		})
	}
	var home2Slider = new Swiper('.home-2 .swiper-container', {
		loop: true,
		speed: 1000,
		slidesPerView: 3,
		spaceBetween: 15,
		freeMode: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.home-2 .swiper-button-next',
			prevEl: '.home-2 .swiper-button-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 2,
			},
		},
	})
	var home3Slider = new Swiper('.home-3 .swiper-container', {
		loop: true,
		speed: 1200,
		slidesPerView: 3,
		spaceBetween: 30,
		autoplay: {
			delay: 2800,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.home-3 .swiper-button-next',
			prevEl: '.home-3 .swiper-button-prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
				simulateTouch: true,
			},
			991: {
				slidesPerView: 2,
				simulateTouch: true,
			},
		},
	})
	$('.home-3 .news-tab-list .news-tab li').on('click', function () {
		var currentTab = $(this).find('a').attr('data-href')
		$(this).siblings('li').removeClass('active')
		$(currentTab).siblings().hide().removeClass('show')
		$(this).addClass('active')
		$(currentTab).fadeIn(300).attr('style', 'display:flex').delay(300).addClass('show')
	})
	// Custom
	if ($('.Module-174 ul li.active').length > 0) {
		$('.Module-138 ul li:nth-child(1)').addClass('active')
		HeaderHover()
	} else if ($('.Module-183 ul li.active').length > 0) {
		$('.Module-138 ul li:nth-child(3)').addClass('active')
		HeaderHover()
	} else if ($('.Module-149 ul li.active').length > 0) {
		$('.Module-138 ul li:nth-child(4)').addClass('active')
		HeaderHover()
	} else if ($('.Module-154 ul li.active').length > 0) {
		$('.Module-138 ul li:nth-child(6)').addClass('active')
		HeaderHover()
	}

	$('.Module-141 ul li:nth-child(4), .Module-141 ul li:nth-child(6)').children('a').attr('target', '_blank')

});
$(window).on('resize', function () {
	if ($('#customHover ul li.active').length > 0) {
		var widthOfThumbs = $('#customHover ul li.active').innerWidth()
		let positionOfThumb = $('#customHover ul li.active').offset().left - $('#customHover').offset().left
		$('#hoverThumb').css({
			"left": positionOfThumb,
			"width": widthOfThumbs
		})
	}
})
