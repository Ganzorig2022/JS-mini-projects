let player1Score = document.getElementById("score-0");
let player2Score = document.getElementById("score-1");
let currentNum1 = document.getElementById("current-0");
let currentNum2 = document.getElementById("current-1");
let active1 = document.getElementsByClassName("player1-talbar")[0];
let active2 = document.getElementsByClassName("player2-talbar")[0];
let diceDom = document.querySelector(".dice");
let activePlayer = 0;

document.querySelector(".btn-roll").addEventListener("click", function () {
  // Roll дээр дарахад шоо хаяад дурын нэг тоо гарна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = `dice-${diceNumber}.png`;
  activePlayer++;
  // Сансамсаргүй тоогоо Тоглогч1-ийн тоо руу хийв.Тоглогчийн ээлжийг шууд 1-р тоглогчоос сондгой тоогоор эхлэнэ гэж үзэв.

  if (activePlayer % 2 !== 0) {
    currentNum1.textContent = diceNumber;
    currentNum1.textContent = parseInt(currentNum1.textContent);

    player1Score.textContent = parseInt(player1Score.textContent) + diceNumber;

    active1.classList.add("active");
    active2.classList.remove("active");
  } else {
    currentNum2.textContent = diceNumber;
    currentNum2.textContent = parseInt(currentNum2.textContent);

    player2Score.textContent = parseInt(player2Score.textContent) + diceNumber;

    active2.classList.add("active");
    active1.classList.remove("active");
  }

  // Ялагч тодрох агшин

  if (player1Score.textContent == 10) {
    active1.classList.add("winner");
    active1.classList.remove("active");
    active2.classList.remove("active");
    // console.log(player1Score.textContent);
  } else if (player2Score.textContent == 10) {
    active2.classList.add("winner");
    active1.classList.remove("active");
    active2.classList.remove("active");
  } else console.log("aaaaaaaaa");
});

// Тоглоомыг RESET хийдэг Button.
document.querySelector(".btn-new").addEventListener("click", function () {
  diceNumber = 0;
  currentNum1.textContent = 0;
  currentNum2.textContent = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
});
