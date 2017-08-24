//Problem: No user interaction cuases no change to application
//Solution: When user interacts cause changes appropriately
var color =$(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li" ,function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});


//When new color is pressed
  //Show color select or hide color select
$("#revealColorSelect").click(function(){
  changeColor();
  $("#colorSelect").toggle();
});

function changeColor(){
  //update the color
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + ", " + g + ",  " + b + " )");
}

  //When color sliders change
    $("input[type=range]").change(changeColor);

//When add color is pressed
$("#addNewColor").click(function(){
  //append the color to the conrols ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //select the new color
  $newColor.click();


  $("#colorSelect").hide();

});


//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown){
      context.beginPath();
      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      context.strokeStyle = color;
      lastEvent = e;
      }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});
