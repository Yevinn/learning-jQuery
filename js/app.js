//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");


//Hide Hints
$("form span").hide();

function passwordEvent(){
  if($password.val().length > 7){
      //Hide hint if valid
      $password.next().hide();
  } else{
      //else show hint
      $password.next().show();
  }
}

function confirmPasswordEvent(){
  if($password.val() === $confirmPassword.val()){
    $confirmPassword.next().hide();
  } else{
    $confirmPassword.next().show();
  }
}

//When even happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);;


//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
  //Find out if password and confirmation match
    //Hide hint if matched
    //Show hint if not (else)
