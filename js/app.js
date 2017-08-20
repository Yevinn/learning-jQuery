//Problem: User when clicking on image goes to a dead end
//Solution: Create an lightbox with the large image

//1- Capture the click even on a link to an image
$("#imageGallery a").click(function(){
  event.preventDefault();
  var href = $(this).attr("href");
  console.log(href);
  //1.1- Show the overlay.
  //1.2 - Update overlay with the image link
  //1.3 - Get Childs Alt atribute and set caption
});

//2 - Add overlay
  //2.1 - An image
  //2.2 - A caption
//3 - When overlay is clicked
  //3.1 - Hide the overlay
