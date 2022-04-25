const slideImage = document.querySelectorAll(".slider");
const btnPrev = document.getElementsByClassName("prev")[0];
const btnNext = document.getElementsByClassName("next")[0];
let index = 0;
console.log(slideImage);
console.log(btnNext);
console.log(btnPrev);

function slider1() {
  index--;
  if (index < 0) {
    index = slideImage.length - 1;
  }
  showImage(index);
  console.log(index);
}
function slider2() {
  index++;
  if (index >= slideImage.length) {
    index = 0;
  }
  showImage(index);
  console.log(index);
}

function showImage() {
  for (let i = 0; i < slideImage.length; i++) {
    slideImage[i].style.display = "none";
  }
  slideImage[index].style.display = "block";
}

showImage();

btnPrev.addEventListener("click", slider1);
btnNext.addEventListener("click", slider2);
