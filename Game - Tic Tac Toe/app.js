document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const result = document.querySelector("#result");
  const displayCurrentPlayer = document.querySelector("#current-player");
  let currentPlayer = 1;

  // Buh bolomjit daraallasan 4 buuh magadlaluudiin ARRAY. DIV-vvdiin index-iin dugaariin bairlalaar bn.
  const winArrays = [
    [0, 1, 2],
    [2, 5, 8],
    [6, 7, 8],
    [0, 3, 6],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Index:0 dr [0, 1, 2, 3] geh met array-iin index bolgonoor dawtana.
  function checkBoard() {
    for (let y = 0; y < winArrays.length; y++) {
      // Jishee ni ene [13, 20, 27, 34] square1 ni:13, square2:20, square3:27 geh met.
      const square1 = squares[winArrays[y][0]];
      const square2 = squares[winArrays[y][1]];
      const square3 = squares[winArrays[y][2]];

      // square1,2,3-vvd ni ".player-one" gesen class-tai esehiig shalgaad result DIV-rvv vr dvng ni zaaj ogno.
      if (
        square1.classList.contains("player-one") &&
        square2.classList.contains("player-one") &&
        square3.classList.contains("player-one")
      ) {
        result.innerHTML = "Нэгдүгээр Тоглогч Яллаа!";
      }
     
      // square1,2,3,4-vvd ni ".player-two" gesen class-tai esehiig shalgaad result DIV-rvv vr dvng ni zaaj ogno.
      if (
        square1.classList.contains("player-two") &&
        square2.classList.contains("player-two") &&
        square3.classList.contains("player-two")
      ) {
        result.innerHTML = "Хоёрдугаар Тоглогч Яллаа!";
      }
    }
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      //herwee dood taliin 7 mor ni dvvrsen bol ".taken" class nemj ogno. Vvnii daraa zowhon deer ni daraagiin dursee bairshuulna.

      // 2 toglogchiin bairiig solino. Mon eeljleh bolgondoo tuhai toglogchiin ".player" class-iig nemj ogsnoor delgetsen dr RED, BLUE (css) dursnvvd haragdana.
      if (!squares[i].classList.contains("taken")) {
        if (currentPlayer == 1) {
          squares[i].classList.add("taken");
          squares[i].classList.add("player-one");
          currentPlayer = 2;
          displayCurrentPlayer.innerHTML = currentPlayer;
        } else if (currentPlayer == 2) {
          squares[i].classList.add("taken");
          squares[i].classList.add("player-two");
          currentPlayer = 1;
          displayCurrentPlayer.innerHTML = currentPlayer;
        }
      }
      checkBoard();
    };
  }
});
