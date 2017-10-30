$(function () {
  var $content = $('.medium-feed');
  var data = {
    rss_url: 'https://medium.com/feed/@Ljyockey'
  };
  $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    if (response.status === 'ok') {
      var output = '';
      $.each(response.items, function (k, item) {
        output += '<h4 class="date">' + $.format.date(item.pubDate, "MMM dd") + "</h4>";
        var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
        var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
        var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
        var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
        var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
        output += '<div class="blog-element"><img src="' + src + '"></div></div>';
        output += '</div><div class="blog-content"><h3><a href="'+ item.link + '">' + item.title + '</a></h3>';
        var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
        var maxLength = 270 // maximum number of characters to extract
        //trim the string to the maximum length
        var trimmedString = yourString.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        output += '<p>' + trimmedString + '...</p>';
        output += '</div></div></div>';
        return k < 0; //returns the first 4 results only
      });
      $content.html(output);
    }
  });
});