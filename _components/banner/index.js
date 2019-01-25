var Banner = {
	HomeBanner: function () {
		$(".home-banner .rev-slider").revolution({
			sliderType: "standard",
			sliderLayout: "fullwidth",
			responsiveLevels: [0, 576, 768, 992, 1200],
			gridheight: [690, 615, 565, 490, 0],
			delay: 4000,
			navigation: {
				arrows: { enable: false },
				onHoverStop: "off",
			},
			navigation: {
				tabs: {
					enable: true,
					style: 'metis',
					width: 40,
					height: 40,
					direction: 'vertical',
					span: true,
					space: 15,
					h_align: "right",
					v_align: "center",
					h_offset: ($(window).width() - $('.container').width()) / 2,
					v_offset: 30,
					tmp:
						`<div class="tp-tab-number">{{param1}}</div>`,
				}
			}
		});
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
