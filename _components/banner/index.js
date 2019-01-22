var Banner = {
	HomeBanner: () => {
		$(".home-banner .rev-slider").revolution({
			sliderType: "standard",
			sliderLayout: "auto",
			delay: 4000,
			gridheight: 420,
			navigation: {
				arrows: { enable: false },
				onHoverStop: "off",
			},
		});
	}
}