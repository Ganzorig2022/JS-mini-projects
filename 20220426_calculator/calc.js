const operatorsBtn = document.getElementsByClassName("operator");
const clear = document.getElementsByClassName("clear")[0];
let numbers = document.getElementsByClassName("number");
const equalBtn = document.getElementsByClassName("equal")[0];

let output = document.getElementsByClassName("output")[0];
let operand1 = 0;
let operand2 = 0;
let operation = "";
// for (let i = 0; i < operators.length; i++) {
//   operators[i].addEventListener("click", function (event) {
//     let a = operators[i].textContent;
//   });
// }

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (event) {
    //target object ni yag ali towchin der darsniig haruulj ogdog.
    if (output.textContent === "0") {
      output.textContent = event.target.textContent;
    } else {
      output.textContent += event.target.textContent;
    }
  });
}

//ES6 for/of loop
for (let operator of operatorsBtn) {
  operator.addEventListener("click", function (event) {
    operation = event.target.textContent;
    operand1 = output.textContent;
    output.textContent = "0";
  });
}

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

//= darhad hariu ni gardag

equalBtn.addEventListener("click", () => {
  let result = 0;
  operand2 = output.textContent;
  if (operation === "+") {
    result = add(parseInt(operand1), parseInt(operand2));
  } else if (operation === "-") {
    result = sub(parseInt(operand1), parseInt(operand2));
  }
  output.textContent = result;
});

// clear towch dr darhad display dr hariug 0 bolgoj reset-ledeg.

clear.addEventListener("click", () => {
  output.textContent = 0;
});
