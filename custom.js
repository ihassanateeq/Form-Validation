var form = document.querySelector("#form");

var username = document.querySelector("#username");

var email = document.querySelector("#email");

var password = document.querySelector("#password");

var password2 = document.querySelector("#password2");

function showError(input, msg) {
  var formControl = input.parentElement;
  formControl.className = "form-control error show";
  var Small = formControl.querySelector("small");

  Small.innerHTML = msg;
}

function showSuccess(input) {
  var formControl = input.parentElement;

  formControl.className = "form-control success";
}

// Event Listener

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (username.value == "") {
    showError(username, "Username is not Entered");
  } else {
    showSuccess(username);
  }
});

// Happy Coding
