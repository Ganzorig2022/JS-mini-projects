const operators = document.getElementsByClassName("operator");
const clear = document.getElementsByClassName("clear")[0];
let number = document.getElementsByClassName("number");
let output = document.getElementsByClassName("output")[0];
let firstNum = null;

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    operators[i].textContent;
  });
}
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (el) {
    let numberStr = parseInt(el.target.textContent);
    let numberInt = parseInt(number.textContent);

    if (numberInt === 0) {
      number.textContent = numberStr;
    } else {
      number.textContent += numberStr;
    }

    display(numberStr);
  });
}

function display(num) {
  output.textContent = num;
}

function clearAll(num) {
  num = "";
}

clear.addEventListener("click", clearAll);
