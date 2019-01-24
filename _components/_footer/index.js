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
	},
	init: function () {
		this.footerSlider()
	}
}
