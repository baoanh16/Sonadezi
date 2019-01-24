var Home = {
	home2Slider: function () {
		let home2Slider = new Swiper('.home-2 .swiper-container', {
			loop: true,
			speed: 1000,
			slidesPerView: 3,
			spaceBetween: 15,
			freeMode: true,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.home-2 .swiper-button-next',
				prevEl: '.home-2 .swiper-button-prev',
			},
			breakpoints: {
				480: {
					slidesPerView: 1,
				},
				991: {
					slidesPerView: 2,
				},
			},
		})
	},
	home3Slider: function () {
		let home3Slider = new Swiper('.home-3 .swiper-container', {
			loop: true,
			speed: 1200,
			slidesPerView: 3,
			spaceBetween: 30,
			autoplay: {
				delay: 2800,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.home-3 .swiper-button-next',
				prevEl: '.home-3 .swiper-button-prev',
			},
			breakpoints: {
				480: {
					slidesPerView: 1,
					simulateTouch: true,
				},
				991: {
					slidesPerView: 2,
					simulateTouch: true,
				},
			},
		})
	},
	home3Tab: function () {
		$('.home-3 .news-tab-list .news-tab li').on('click', function () {
			let currentTab = $(this).find('a').attr('data-href')
			$(this).siblings('li').removeClass('active')
			$(currentTab).siblings().hide().removeClass('show')
			$(this).addClass('active')
			$(currentTab).fadeIn(300).attr('style', 'display:flex').delay(300).addClass('show')
		})
	},
	init: function () {
		this.home2Slider();
		this.home3Slider();
		this.home3Tab();
	}
}
