var Footer = {
	footerSlider: function () {
		let footerSlider = new Swiper('.cc-footer .swiper-container', {
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
		})
	},
	init: function () {
		this.footerSlider()
	}
}
