// viết script, gọi function ở đây
$(document).ready(() => {
	let bannerPage = new Swiper('.banner-page .swiper-container', {
		speed: 1200,
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}
	})
	Header.toggleLanguage();
	Header.HeaderHover();
});
$(window).on('resize', function () {
	var widthOfThumbs = $('#customHover ul li.active').innerWidth()
	let positionOfThumb = $('#customHover ul li.active').offset().left - $('#customHover').offset().left
	$('#hoverThumb').css({
		"left": positionOfThumb,
		"width": widthOfThumbs
	})
})
