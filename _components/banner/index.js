var Banner = {
	HomeBanner: function () {
		let PageBanner = new Swiper('.home-banner .swiper-container', {
			autoplay: {
				delay: 4500,
				disableOnInteraction: true,
			},
			speed: 1000,
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 30,
				slideShadows: false,
			},
			loop: true,
			pagination: {
				el: '.home-banner .swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
			},
		})
	},
	PageBanner: function () {
		let PageBanner = new Swiper('.page-banner .swiper-container', {
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
	},
	init: function () {
		this.HomeBanner();
		this.PageBanner();
	}
}
