//Problem: User when clicking on image goes to a dead end
//Solution: Create an lightbox with the large image

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);
//  Add overlay to overlay
$("body").append($overlay);
  //An image
  //A caption


//1- Capture the click even on a link to an image
$("#imageGallery a").click(function(){
  event.preventDefault();
  var href = $(this).attr("href");

  //Update overlay with the image link
  $image.attr("src", href);
  //Show the overlay.
$overlay.show();
  //Get Childs Alt atribute and set caption
});


//3 - When overlay is clicked
$overlay.click(function(){
  $overlay.hide();
});
  //3.1 - Hide the overlay
