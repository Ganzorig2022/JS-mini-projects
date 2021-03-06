const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  // form-control gesen parent DIV
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show input success message
function showSuccess(input) {
  // form-control gesen parent DIV
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Chech input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
// Check password match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

// Get fieldname
function getFieldName(input) {
  // Username-iin "U" usgiig songood uppercase bolgod zalgaad uldsen ugiig ni nemne.
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Submit Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 3, 20);
  checkEmail(email);
  checkPasswordsMatch(password, password2);

  const userName = form.username.value;
  const passWord = form.password.value;
  const eMail = form.email.value;
  console.log(userName);
  if (
    userName === "ganzo" &&
    eMail === "ganzo.galaxy@gmail.com" &&
    passWord === "123"
  ) {
    alert("You have successfully logged in.");
    window.location.href = "cart.html";
  } else {
    alert("You have failed to logged in.");
  }
});
