// Button to Color
const boxes = document.querySelectorAll(".box");
const buttonTowch = document.getElementById("button");
console.log(buttonTowch);
console.log(boxes);

// 24shireg box selectelsen bolhoor nad ruu ARRAY-g butsaasan uchraas boxes[i].style gej handsan.
function startColor() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = generateRandomHexColor();
    boxes[i].innerHTML = generateRandomHexColor();
  }
}
buttonTowch.addEventListener("click", startColor);

const generateRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
