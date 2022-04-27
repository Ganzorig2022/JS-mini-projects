const operatorsBtn = document.getElementsByClassName("operator");
const clear = document.getElementsByClassName("clear")[0];
let numbers = document.getElementsByClassName("number");
const equalBtn = document.getElementsByClassName("equal")[0];
const floatBtn = document.getElementsByClassName("float")[0];
let output = document.getElementsByClassName("output")[0];

let operand1 = 0;
let operand2 = 0;
let operation = "";

// .tseg deer darhad display dr
floatBtn.addEventListener("click", function () {
  output.textContent += ".";
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (event) {
    //target object ni yag ali towchin der darsniig haruulj ogdog.
    if (output.textContent === "0") {
      //toonii urd 0 garaad bgag arilgaw.
      output.textContent = event.target.textContent;
      // daraagiin toog darhad omnoh toon der zalgaj ogow.
    } else output.textContent += event.target.textContent;
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

// = tentsuu dr darhad hariu ni gardag

equalBtn.addEventListener("click", () => {
  let result = 0;
  operand2 = output.textContent;
  if (operation === "+") {
    result = add(parseFloat(operand1), parseFloat(operand2));
  } else if (operation === "-") {
    result = sub(parseInt(operand1), parseInt(operand2));
  }
  output.textContent = result.toFixed(2);
});

// clear towch dr darhad display dr hariug 0 bolgoj reset-ledeg.

clear.addEventListener("click", () => {
  output.textContent = 0;
});
