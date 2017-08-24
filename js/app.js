//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide Hints
$("form span").hide();

function isPasswordValid(){
  return $password.val().length > 7;
}

function arePasswordsMatching(){
  return $password.val() === $confirmPassword.val();
}
function canSubmit(){
  return isPasswordValid() && arePasswordsMatching();
}
function passwordEvent(){
  if(isPasswordValid()){
      //Hide hint if valid
      $password.next().hide();
  } else{
      //else show hint
      $password.next().show();
      $("button").prop("disabled");
  }
}

function confirmPasswordEvent(){
  if(arePasswordsMatching()){
    $confirmPassword.next().hide();
  } else{
    $confirmPassword.next().show();
    $("button").prop("disabled");
  }
}

function enableSubmitEvent(){
  $("#submit").prop("disabled", !canSubmit());
}

//When even happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  //Find out if password and confirmation match
    //Hide hint if matched
    //Show hint if not (else)
enableSubmitEvent();
