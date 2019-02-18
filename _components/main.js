// viết script, gọi function ở đây
$(document).ready(() => {
	Banner.init();
	Header.init();
	Footer.init();
	Job.init();
	Home.init();
	// Custom
	if ($('.Module-174 ul li.active').length > 0) {
		$('.Module-138 ul li:nth-child(1)').addClass('active')
		Header.HeaderHover()
	} else if ($('.Module-183 ul li.active').length > 0) {
		$('.Module-138 ul li:nth-child(3)').addClass('active')
		Header.HeaderHover()
	} else if ($('.Module-149 ul li.active').length > 0) {
		$('.Module-138 ul li:nth-child(4)').addClass('active')
		Header.HeaderHover()
	} else if ($('.Module-154 ul li.active').length > 0) {
		$('.Module-138 ul li:nth-child(6)').addClass('active')
		Header.HeaderHover()
	}
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
