var Header = {
	toggleLanguage: () => {
		$('.cc-header .language .current').click(function () {
			$(this).siblings('.dropdown').slideToggle(250)
		})
	},
	addOverlay: (headerBreakpoint) => {
		if (headerBreakpoint.matches) {
			$('#wrapper').append('<div class="overlay" id="overlay"></div>')
		} else {
			$('.overlay').remove();
		}
	},
	toggleMenuMobile: () => {
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
	},
	changeSizeLogo: () => {
		var scrollTopPosition = 0;
		if (window.matchMedia('(min-width: 992px)').matches === true) {
			$(window).on('scroll', function () {
				if ($(window).scrollTop() > scrollTopPosition) {
					$('.logo-wrapper').addClass('scrollDown')
					$('.menu-wrapper .top').slideUp()
					scrollTopPosition = $(window).scrollTop()
				} else {
					$('.logo-wrapper').removeClass('scrollDown')
					$('.menu-wrapper .top').slideDown()
					scrollTopPosition = $(window).scrollTop()

				}
			})
		}
	},
	HeaderHover: () => {
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
	},
	init: function () {
		this.toggleLanguage();
		this.HeaderHover();
		this.changeSizeLogo();
		this.toggleMenuMobile();
		let headerBreakpoint = matchMedia("(max-width: 991px)");
		this.addOverlay(headerBreakpoint);
		headerBreakpoint.addListener(this.addOverlay)
	},
}
