// viết script, gọi function ở đây
$(document).ready(() => {
	Banner.HomeBanner();
	Header.toggleLanguage();
	Header.HeaderHover();
	Job.toggleApplyForm();
});
$(window).on('resize', function () {
	var widthOfThumbs = $('#customHover ul li.active').innerWidth()
	let positionOfThumb = $('#customHover ul li.active').offset().left - $('#customHover').offset().left
	$('#hoverThumb').css({
		"left": positionOfThumb,
		"width": widthOfThumbs
	})
})
