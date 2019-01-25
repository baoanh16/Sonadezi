var Header = {
	init: function () {
		this.toggleLanguage();
		this.HeaderHover();
	},
	toggleLanguage: () => {
		$('.cc-header .language .current').click(function () {
			$(this).siblings('.dropdown').slideToggle(250)
		})
	},
	HeaderHover: () => {
		if ($('#customHover').length > 0) {

			if ($('#customHover ul li.active').length > 0) {
				var widthOfThumbs = $('#customHover ul li.active').innerWidth()
				$('#hoverThumb').show().width(widthOfThumbs)
				let positionOfThumb = $('#customHover ul li.active').offset().left - $('#customHover').offset().left
				$('#hoverThumb').css({
					"left": positionOfThumb,
					"width": widthOfThumbs
				})
			}
			$('#customHover ul li').each(function () {
				$(this).mouseenter(function () {
					let positionOfThumb = $(this).offset().left - $('#customHover').offset().left
					let widthOfThumbs = $(this).innerWidth()
					$('#hoverThumb').css({
						"left": positionOfThumb,
						"width": widthOfThumbs
					})
				}).mouseleave(function () {
					// tra ve vi tri cu 
					if ($('#customHover ul li.active').length > 0) {

						let positionOfThumb = $('#customHover ul li.active').offset().left - $('#customHover').offset().left
						let widthOfThumbs = $('#customHover ul li.active').innerWidth()
						$('#hoverThumb').css({
							"left": positionOfThumb,
							"width": widthOfThumbs
						})
					}
				}).click(function () {
					// set vi tri cua scrollbar-thumb khi click
					$('#customHover ul li').not(this).removeClass('active')
					$(this).addClass('active')
					let positionOfThumb = $(this).offset().left - $('#customHover').offset().left
					let widthOfThumbs = $('#customHover ul li.active').innerWidth()
					$('#hoverThumb').css({
						"left": positionOfThumb,
						"width": widthOfThumbs
					})
				})
			})
		}
	}
}
