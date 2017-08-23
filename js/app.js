//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//Hide Hints
$("form span").hide();

function passwordEvent(){
  if($(this).val().length > 8){
      //Hide hint if valid
      $(this).next().hide();
  } else{
      //else show hint
      $(this).next().show();
  }
}

//When even happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);
  //Find out if password is valid
    //Hide hint if valid
    //else show hint

//When event happens on confirmation input
  //Find out if password and confirmation match
    //Hide hint if matched
    //Show hint if not (else)
