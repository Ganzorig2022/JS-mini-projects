// label tagnii ID
const textEl = document.getElementById("text");
// input-iin "speed" ID. Speed attribute-tei uchraas...
const speedEl = document.getElementById("speed");
const text = "I fucking love programming!";

let idx = 1;
let speed = 100 / speedEl.value;

writeText();

function writeText() {
  // string dr slice method ni "I" "L" "O" "V" "E" geh met vseg vsgeer ni tasddag.
  // label tagnii text dotor ni const=text-iig ogow.
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  /*todorhoi second tutamd writeText funkts-iig ajilluulna. */

  setTimeout(writeText, speed);
}
