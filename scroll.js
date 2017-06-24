//smooth scrolling
function smoothScroll() {
	$('.scroll').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top-50}, 800);
	});
}

$(function() {
	smoothScroll();
});