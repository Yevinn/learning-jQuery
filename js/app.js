//Problem: User when clicking on image goes to a dead end
//Solution: Create an lightbox with the large image

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');
//An image to overlay
$overlay.append($image);
  //A caption to overlay
  $overlay.append($caption);

$("body").append($overlay);
  //An image



//1- Capture the click even on a link to an image
$("#imageGallery a").click(function(){
  event.preventDefault();
  var href = $(this).attr("href");

  //Update overlay with the image link
  $image.attr("src", href);
  //Show the overlay.
$overlay.show();
  //Get Childs Alt atribute and set caption
var captionText = $(this).children("img").attr('alt');
$caption.text(captionText);

});


//3 - When overlay is clicked
$overlay.click(function(){
  $overlay.hide();
});
  //3.1 - Hide the overlay
