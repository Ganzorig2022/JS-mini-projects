const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  //search dr darhad idewhgv bga active class toggle-oor untarch asna.
  search.classList.toggle("active");
  input.focus();
});
