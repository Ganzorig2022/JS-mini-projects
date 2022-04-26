let dislayNumber = 0;
const displayAnswer = document.getElementsByClassName("box1")[0];
console.log(displayAnswer);

const btn = document.getElementsByTagName("button");
console.log(btn);

let num7 = document.getElementsByClassName("number")[0];
console.log(num7);

let num8 = document.getElementsByClassName("number")[1];
console.log(num8);

btn.addEeventListener("click", show);

function show() {
  console.log("hi");
}

function number1() {
  if (dislayNumber === 0) {
    displayAnswer.innerHTML = dislayNumber;
    console.log(dislayNumber);
  }
}
