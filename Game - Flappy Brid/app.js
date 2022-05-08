// DOMContentLoaded idewhjvvllsneer HMTL cod maani CSS, JS-iin unshij duusahiig hvleehgvigeer LOAD hiine.

document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const startBtn = document.getElementById("start-btn");
  console.log(startBtn);

  // bird-iig bairshliig talbain gold left:220px, bottom:500px-eer zaaj ogow. GRAVITY huwisagchiin utgaar bainga hasahaar bird ni dooshoogoo unana.
  let birdLeft = 220;
  let birdBottom = 300;
  let gravity = 2;
  let isGameOver = false;
  let gap = 400;

 
  function startGame() {
    birdBottom -= gravity;
    bird.style.bottom = `${birdBottom}px`;
    bird.style.left = birdLeft + "px";
  }

  // bird-oo doosh ni tasraltgv unagaahiin tuld setInterval() function-aar 20millisec-eer tawiw.
  let gameTimerId = setInterval(startGame, 20);

  // keycode:32 ni keyboard-nii SPACE dr darah kommandig zaaj ogno. Space dr darahad jump() ajillana.
  function control(e) {
    if (e.keyCode === 32) {
      jump();
    }
  }

  //======== Bird-ee userdeg bolgodog heseg.
  function jump() {
    // 500px hurtelh ondor hvrtel bird maani 50px-eer JUMP hiine.
    if (birdBottom < 500) birdBottom += 30;
    bird.style.bottom = `${birdBottom}px`;
  }

  // Keyboard ali neg towchin dr darah bvrt control() function ajillaj bird-iig vserdeg bolgono.
  document.addEventListener("keyup", control);

  //========Saad totgor hiih function
  function generateObstacle() {
    // 1. obstacle-iin DIV vvsgene.
    // 2. ter DIV-dee .obstacle class vvsgene.
    // 3. vvsgesen ter class-tai DIV-ee "game-container" gesen vndsen PARENT DIV-dee hj ogno.
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 100;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement("div");
    const topObstacle = document.createElement("div");
    if (!isGameOver) {
      obstacle.classList.add("obstacle");
      topObstacle.classList.add("topObstacle");
    }
    gameDisplay.appendChild(obstacle);
    gameDisplay.appendChild(topObstacle);
    topObstacle.style.left = `${obstacleLeft}px`;
    topObstacle.style.bottom = obstacleBottom + gap + "px";
    obstacle.style.left = `${obstacleLeft}px`;
    obstacle.style.bottom = `${obstacleBottom}px`;

    //========Saad totgor-oo hodoldog bolgoh function
    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = `${obstacleLeft}px`;
      topObstacle.style.left = `${obstacleLeft}px`;

      if (obstacleLeft === -50) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
        gameDisplay.removeChild(topObstacle);
      }

      // bird maani dooshoo unahdaa ground dr tulah buyu 0 bolohod gameOver() function ajillana. Bird-iin bairlal left:220px
      if (
        (obstacleLeft > 200 &&
          obstacleLeft < 270 &&
          birdLeft === 220 &&
          (birdBottom < obstacleBottom + 190 ||
            birdBottom > obstacleBottom + gap - 155)) ||
        birdBottom === 0
      ) {
        gameOver();
        clearInterval(timerId);
      }
    }

    //saad maani 20mlsec tutamd hodolno. moveObstacle() function-iig ajluulna
    let timerId = setInterval(moveObstacle, 20);
    //   3000mSec buyu 3sec tutamd shine obstacle oruulj ogno.
    if (!isGameOver) setTimeout(generateObstacle, 3000);
  }
  generateObstacle();

  // 20mlSec tutamd ajillaj bsan startGame() function-iig clearInterval-aar zogsoow.
  function gameOver() {
    clearInterval(gameTimerId);
    alert("gameover");
    isGameOver = true;
    document.removeEventListener("keyup", control);
  }
  // ===================================================
  //Durem-iig haruuldag, nuudag heseg
  const rulesBtn = document.getElementById("rules-btn");
  const closeBtn = document.getElementById("close-btn");
  const rules = document.getElementById("rules");

  rulesBtn.addEventListener("click", () => {
    rules.classList.add("show");
    console.log("asdasdsadad");
  });
  closeBtn.addEventListener("click", () => {
    console.log("asdasdsadad");
    rules.classList.remove("show");
  });

  // ===================================================
  // button dr darahad white effect
  const buttons = document.querySelectorAll(".ripple");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // mouse-iin bairshliig X, Y toogoor gargaj ogno.
      const x = e.clientX;
      const y = e.clientY;

      // button bairshliig gargaj ogno.
      const buttonTop = e.target.offsetTop;
      const buttonLeft = e.target.offsetLeft;

      const xInside = x - buttonLeft;
      const yInside = y - buttonTop;

      const circle = document.createElement("span");

      // circle.className = "circle"- ni classList.add-tai adilhan.
      circle.classList.add("circle");
      this.appendChild(circle);
      circle.style.top = yInside + "px";
      circle.style.left = xInside + "px";

      setTimeout(() => circle.remove(), 200);
    });
  });

  // ===================================================
  // Dark mode-Light mode hseg.
  const toggle = document.querySelector(".dark-mode-btn");

  toggle.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      e.target.innerHTML = "Dark mode";
      // toggle.innerHTML = "Dark mode";
    } else {
      html.classList.add("dark");
      e.target.innerHTML = "Light mode";
    }
  });
});
