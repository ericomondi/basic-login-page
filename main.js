function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var email_len = document.getElementById("email").value.length;
  var password_len = document.getElementById("password").value.length;

  if (email_len > 0 && password_len > 0) {
    if (email == "test@mail.com" && password == "test#123") {
      alert("Login successfully");
      window.location = URL = "https://github.com/ericomondi/basic-login-page"; // Redirecting to other page.
      return false;
    } else {
      attempt--; // Decrementing by one.

      // Disabling email, password and login fields after 3 attempts.
      if (attempt == 0) {
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("login").disabled = true;
        alert("Account Blocked. Contact Admin");
        return false;
      }

      alert("You have left " + attempt + " attempt;");
    }
  } else {
    alert("Inputs cant be empty");
  }
}
