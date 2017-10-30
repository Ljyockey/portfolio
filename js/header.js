var titles = [
  'Sports Fan',
  'Theme Park Enthusiast',
  'Tweets with GIFs',
  'Full-Stack Web Developer'  
];

function displayTitles() {
	var count = 0;
	setInterval(function() {
		$('.js-titles').css({fontSize: '0'}).text(titles[count]).animate({fontSize: '1.5em'});
		count++;
		if (count == titles.length) {
			count = 0;
		}
	}, 3000);

}

$(function() {
	displayTitles();
});