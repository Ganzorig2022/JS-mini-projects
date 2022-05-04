var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;
// c.lineWidth= 5;
// c.globalAlpha = 0.5;

var mousex = 0;
var mousey = 0;
var grav = 0.99;

// mouse hodolgoh ued mouse X, Y koordinatiig gargaj awna.
addEventListener("mousemove", function (event) {
  mousex = event.clientX; // Get the horizontal coordinate of mouse pointer
  mousey = event.clientY; // Get the vertical coordinate
});

// RGB ongiig RANDOM-oor hiideg heseg.
function randomColor() {
  return `rgba(${Math.round(Math.random() * 250)}, ${Math.round(
    Math.random() * 250
  )},${Math.round(Math.random() * 250)},${Math.ceil(Math.random() * 10) / 10})`;
}

// Object-oor BALL-iin undsen medeellvvdiig oruulna.
class Ball {
  constructor() {
    this.color = randomColor();
    this.radius = Math.random() * 20 + 14;
    this.startradius = this.radius;
    this.x = Math.random() * (tx - this.radius * 2) + this.radius;
    this.y = Math.random() * (ty - this.radius);
    this.dy = Math.random() * 20;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() / 5;
    this.update = function () {
      //aliwaa dursiig zurj ehlvvleh function()
      c.beginPath();
      // booronhii dursiig zurdag method.
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      //boorohii dursee budah.
      c.fillStyle = this.color;
      c.fill();
      //boorohii dursnii gaduur zuraas ogoh.
      c.stroke();
    };
  }
}

// LOOP-eer 50n shirheg booronhii durs hiiw.
var bal = [];
for (var i = 0; i < 50; i++) {
  bal.push(new Ball());
}

function animate() {
  // browser dr amitation haruulahdaa zaawal ajilluuldag function. Parametriin utgaara (callback) function awdag.
  requestAnimationFrame(animate); //setInterval-tai tostei.
  // durs hodlohdoo zamdaa ooriigoo uldeeged yawdag tul tvvniig ustgana.
  c.clearRect(0, 0, tx, ty);
  for (var i = 0; i < bal.length; i++) {
    bal[i].update();
    bal[i].y += bal[i].dy;
    bal[i].x += bal[i].dx;
    if (bal[i].y + bal[i].radius >= ty) {
      bal[i].dy = -bal[i].dy * grav;
    } else {
      bal[i].dy += bal[i].vel;
    }
    if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
      bal[i].dx = -bal[i].dx;
    }

    //mouse ball-dr hvrhed ball-iin hemjee tomordog heseg.
    if (
      mousex > bal[i].x - 20 &&
      mousex < bal[i].x + 20 &&
      mousey > bal[i].y - 50 &&
      mousey < bal[i].y + 50 &&
      bal[i].radius < 70
    ) {
      bal[i].radius += 10;
    } else {
      if (bal[i].radius > bal[i].startradius) {
        bal[i].radius += -5;
      }
    }
    //forlop end
  }
  //animation end
}

animate();

setInterval(function () {
  bal.push(new Ball());
  // 0 position dr 1 item remove hiine.
  // bal.splice(0, 1);
}, 400);
