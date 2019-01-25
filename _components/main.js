// viết script, gọi function ở đây
$(document).ready(() => {
	Banner.init();
	Header.init();
	Footer.init();
	Job.init();
	Home.init();
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
