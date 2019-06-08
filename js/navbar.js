$(window).scroll(function() {
	if($(document).scrollTop() > 18) {
		$('nav').addClass('shrink');
	}else {
		$('nav').removeClass('shrink');
	}
});