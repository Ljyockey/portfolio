//smooth scrolling
function smoothScroll() {
  $('.scroll').on('click', function(e) {
    e.preventDefault();
	var hash = $(this.hash);
    $('html, body').animate({
      scrollTop: hash.offset().top-50}, 800);
	  hash.addClass('flash');
	  setTimeout(function() {
      	hash.removeClass('flash');
    }, 1000);
  });
}

$(function() {
  smoothScroll();
});