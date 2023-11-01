function home() {
  document.getElementById("main-content").innerHTML =
    '<img src="images/looking right.JPG" class="main-image" alt="" />';
}

function knowMe() {
  document.getElementById("main-content").innerHTML =
    '<img src="images/looking right.JPG" class="main-image" alt="" style=" position: relative; animation-name: move-up; animation-duration: 1.5s; animation-fill-mode: forwards;"/>';
}

// function contact() {
//   document.getElementById("main-content").innerHTML =
//     '<form name="contactForm" onsubmit="return validateForm()" method="post"><label for="name">Name:</label><input type="text" id="name" name="name" />&nbsp;&nbsp;<span id="name-error" class="form-error"></span><br /><br /><label for="email">Email:</label><input type="email" id="email" name="email" />&nbsp;&nbsp;<span id="email-error" class="form-error"></span><br /><br /><label for="Phone">Phone:</label><input type="phone" id="phone" name="phone" />&nbsp;&nbsp;<span id="phone-error" class="form-error"></span><br /><br /><input type="submit" value="Submit" /></form>';
// }

function setError(id, error) {
  document.getElementById(id).innerHTML = error;
}

function clearErrors(id) {
  document.getElementById(id).innerHTML = "";
}

function validateForm() {
  clearErrors("name-error");
  clearErrors("email-error");
  clearErrors("phone-error");
  var returnVal = true;
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var phone = document.forms["contactForm"]["phone"].value;

  if (name == "") {
    setError("name-error", "* Name must not be empty");
    returnVal = false;
  }
  if (email == "") {
    setError("email-error", "* Email must not be empty");
    returnVal = false;
  }
  if (phone == "") {
    setError("phone-error", "* Phone must not be empty");
    returnVal = false;
  }

  return returnVal;
}