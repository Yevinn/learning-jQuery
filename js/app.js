// Prevent spoilerphoes from seeing spoilers
//Solution: Hide spoiler and reveal them through user interaction

//1. Hide spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Show Spoiler</button>")
//3.When Button is pushed

  //3.1 Show the spoiler
  //3.2 Get rid of button
