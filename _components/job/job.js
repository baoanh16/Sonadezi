var Job = {
	toggleApplyForm: () => {
		if ($('#applyToggle').length > 0) {

			$('#applyToggle').click(function () {
				$('.job-detail .textbox .apply-form').slideToggle()
			})
		}
	},
	init: function () {
		this.toggleApplyForm()
	}
}
