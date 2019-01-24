var Banner = {
	HomeBanner: () => {
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
	}
}
