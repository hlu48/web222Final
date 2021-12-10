

function error_validation() {
    firstNameCheck();
    lastnameCheck();
    passwordCheck();    
    password2();
    userCheck(); 
    ageCheck();
  
    if (passwordCheck() && userCheck() && firstNameCheck() && lastnameCheck() && password2()
      && ageCheck()) {
      alert("Info is received successfully");
      
      return true;}else {
      return false
    }
  } 
  
  function firstNameCheck() {
    var firstName = document.getElementById("first").value;
    var letters = /^[A-Za-z]+$/;
    if (firstName.match(letters) && firstName.charAt(0) == firstName.charAt(0).toUpperCase()) {
      document.getElementById("msg").innerHTML = " ";
      return true;
    }
    else
      document.getElementById("msg").innerHTML = "Invalid firstname, remember to capitalize!";
    return false;
  }
  
  
  function lastnameCheck() {
    var lastName = document.getElementById("last").value;
    var letters = /^[A-Za-z]+$/;
    if (lastName.match(letters) && lastName.charAt(0) == lastName.charAt(0).toUpperCase()) {
      document.getElementById("msg1").innerHTML = " ";
      return true;
    }
    else
      document.getElementById("msg1").innerHTML = "Please enter valid lastname, remember to capitalize!";
    return false;
  }
  
  
  function passwordCheck() {
    var psswrd = document.getElementById("password").value;
    let regexp = /[a-zA-Z]+[0-9]+/i;
    if (psswrd.length >= 6 && psswrd.match(regexp)) {
      document.getElementById("msg2").innerHTML = " ";
      return true;
    }
    else
      document.getElementById("msg2").innerHTML = "Please enter valid password";
    return false;
  }
  
  
  function password2() {
    var psswrd = document.getElementById("password").value;
    var psswrd2 = document.getElementById("PasswordConfirmation").value;
    if (psswrd == psswrd2) {
      document.getElementById("msg3").innerHTML = " ";
      return true;
    }
    else {
      document.getElementById("msg3").innerHTML = "Password is not identical!";
      return false;
    }
  }
  
 
  function userCheck() {
    var usrname = document.getElementById("username").value;
    if (usrname.length >= 6 && usrname.charAt(0).match('[A-Za-z]')) {
      document.getElementById("msg4").innerHTML = " ";
      return true;
    }
    else {
      document.getElementById("msg4").innerHTML = "Username Invalid!Start with letter and greater than 6!";
      return false;
    }
  }
  
  
  function ageCheck() {
    var age = document.getElementById('age').value;
    if (age < 18 || age > 60) {
      document.getElementById("msg5").innerHTML = "Age must be between 18-60";
      return false;
    }
    else {
      document.getElementById("msg5").innerHTML = " ";
      return true;
    }
  }
  