const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Next towchin der darhad 1-2-3-4 hurtel dawtad 4 dr zogsow.
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
  //   circles.classList("circle");
});

// Prev towchin der darhad 4-3-2-1 hurtel dawtad 1 dr zogsow.
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// Next towchin dr darhad circle-iin array-aar gvigeed, gvihde idx ni currentActive tooluuraas baga ved active class-iig IDEWHJVVleh functs bichlee. End circle parameter booronhii dvrsnvvdin element, idx ni tvvnd hargalzah index-vvd ni yum.
function update() {
  // booronhii durs ni gvidgiig end hiiw.
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // tsenher zuraas ni gvidgiig end hiiw.

  const actives = document.querySelectorAll(".active");
  //active-in urt 2ved circle-iin urt 4.

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
