const boxBtn = document.getElementsByClassName("box");

let playerTurn = 0;


//Toglogch 1, 1-eeree daraad yawah heseg
for (let i = 0; i < boxBtn.length; i++) {
  boxBtn[i].addEventListener("click", function () {
    // console.log(boxBtn[i]);
    console.log(boxBtn[0]);
    playerTurn++;
    if (playerTurn % 2 == 0) {
      document.getElementsByTagName("span")[i].classList.toggle("circle");
    } else {
      document.getElementsByTagName("span")[i].classList.toggle("x");
    }
  });

  //toglogch yalah heseg
}

