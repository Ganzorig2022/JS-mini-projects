const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let gravity = 2;
let isGameOver = false;
let randomHeight1 = Math.floor(Math.random() * 50) + 150;

//============= Ground==============
function ground() {
  ctx.beginPath();
  ctx.fillStyle = "#9B7653";
  ctx.fillRect(0, 450, 600, 50);
  ctx.stroke();
}
ground();
//================ Sky==================
function sky() {
  ctx.beginPath();
  ctx.fillStyle = "#87ceeb";
  ctx.fillRect(0, 0, 600, 450);
}
sky();
//=================== Bird==================
function Bird(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  // Bird-ee zurah function.
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = "#044a4c";
    ctx.fill();
    ctx.closePath();
  };

  // Bird-iin hodloh function.

  this.move = function (x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.x = this.x + x;
    this.y = this.y + y;
    this.draw();

    ground();
    sky();
    pipeUp.pipeUpDraw();
    pipeDown.pipeDownDraw();
  };

  function control() {
    if (bird1.y >= 51) {
      bird1.move(0, -20);
    }
  }
  document.addEventListener("click", control);
  // document.addEventListener("keydown", function (e) {
  //   if (e.keyCode == 32 && bird1.y >= 51 && bird1.y <= 551) {
  //     bird1.move(0, -20);
  //   }
  // });
}

// Bird function-oo ajilluulahda, utga damujuulaad duudna.
const bird1 = new Bird(200, 200, 25);
bird1.draw();

setInterval(function () {
  bird1.move(0, gravity);
}, 25);

function Pipes(x, y, dX, dY) {
  this.x = x;
  this.y = y;
  this.dX = dX;
  this.dY = dY;

  this.pipeDownDraw = function () {
    isGameOver = false;
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.dX, this.dY);
    ctx.closePath();
  };
  this.pipeUpDraw = function () {
    isGameOver = false;
    ctx.beginPath();
    ctx.fillStyle = "#2cb01a";
    ctx.fillRect(this.x, this.y, this.dX, this.dY);
    ctx.closePath();
  };
  this.move = function (x, y) {
    isGameOver = false;
    this.x = this.x + x;
    this.y = this.y + y;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "#2cb01a";
    ctx.fill();

    ground();
    sky();
    this.pipeUpDraw();
    this.pipeDownDraw();
    bird1.draw();
  };
}

const pipeUp = new Pipes(550, 0, 50, randomHeight1);
pipeUp.pipeUpDraw();
const pipeDown = new Pipes(550, 500, 50, -randomHeight1);
pipeDown.pipeDownDraw();

let pipeUpTimer = setInterval(function () {
  pipeUp.move(-2, 0);
}, 25);
let pipeDownTimer = setInterval(function () {
  pipeDown.move(-2, 0);
}, 25);

// if (!isGameOver) setTimeout(pipeUp.pipeUpDraw(), 300);

// if (!isGameOver) {
//   setTimeout(function () {
//     pipeUp.pipeUpDraw();
//     console.log("asdadsadsada");
//   }, 300);
// }
setTimeout(function () {
  pipeUp.move(-2, 0);
  console.log("asdadsadsada");
}, 300);
// function gameOver() {
//   clearInterval(pipeUpTimer);
//   clearInterval(pipeUpTimer);
//   alert("gameover");
//   isGameOver = true;
//   document.removeEventListener("keydown", control);
// }
