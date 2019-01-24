var Home = {

	home2Slider: function () {
		$('.home-2 .home-service').revolution({
			sliderType: 'carousel',
			carousel: {
				maxVisibleItems: 3,
				space: 10,
				infinity: 'on',
			}
		})
	},
	init: function () {
		this.home2Slider();
	}
}
