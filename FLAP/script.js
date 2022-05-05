const canvas = document.getElementById("canvas");
let gravity = 2;
var ctx = canvas.getContext("2d");

// Sky

ctx.beginPath();
ctx.fillStyle = "#87ceeb";
ctx.fillRect(0, 0, 600, 400);

// Ground

// ctx.beginPath();
// ctx.fillStyle = "#9B7653";
// ctx.fillRect(0, 400, 600, 500);
// ctx.stroke();

//Border
ctx.lineWidth = "6";
ctx.strokeStyle = "green";
ctx.rect(0, 0, 600, 500);
ctx.stroke();

// Bird
function Bird(x, y, r, color = "blue") {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;

  // Bird-ee zurah function-aa uusgew.
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  this.move = function (x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    ctx.clearRect(0, 0, 600, 500);
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.fill();
      
    pipe.pipeDraw();
  };
}

// Bird function-oo ajilluulahda, utga damujuulaad duudna.
const bird1 = new Bird(100, 200, 30, (color = "#044a4c"));
bird1.draw();
// bird1.move(50, 50);

window.addEventListener("keydown", function (e) {
  // space dr userne
  if (e.keyCode == 32 && bird1.y >= 51) {
    bird1.move(0, -30);
  }
});

// setInterval(function () {
//   bird1.move(0, 20);
// }, 300);

function Pipes(x, y, dX, dY) {
  this.x = x;
  this.y = y;
  this.dX = dX;
  this.dY = dY;

  this.pipeDraw = function (x, y) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.dX, this.dY);
    ctx.stroke();
  };
}
const pipe = new Pipes(550, 300, 100, 500);
pipe.pipeDraw();

// setInterval(function () {
//   pipe.move(0, 20);
// }, 300);
