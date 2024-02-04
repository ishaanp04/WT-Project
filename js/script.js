function home() {
  document.getElementById("main-content").innerHTML =
    '<img src="images/looking right.JPG" class="main-image" alt="" />';
}

function knowMe() {
  document.getElementById("main-content").innerHTML =
    '<img src="images/looking right.JPG" class="main-image" alt="" style=" position: relative; animation-name: move-up; animation-duration: 1.5s; animation-fill-mode: forwards;"/>';
}

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