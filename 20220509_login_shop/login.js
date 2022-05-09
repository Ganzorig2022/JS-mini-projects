const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginBtn");
const loginErrorMsg = document.getElementById("login-error-msg");
console.log(loginForm);

console.log(loginButton);

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "ganzo" && password === "123") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    alert("Wrong password or username. Try again!");
  }
});
