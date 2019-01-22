var Job = {
	toggleApplyForm: () => {
		$('#applyToggle').click(function () {
			$('.job-detail .textbox .apply-form').slideToggle()
		})
	}
}