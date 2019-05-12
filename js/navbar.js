$(window).scroll(function() {
	if($(document).scrollTop() > 45) {
		$('nav').addClass('shrink');
	}else {
		$('nav').removeClass('shrink');
	}
});