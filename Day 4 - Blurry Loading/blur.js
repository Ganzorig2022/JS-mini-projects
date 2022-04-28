const big = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

// =====TEXT 0-100% hurtel unshih function heseg===============
let load = 0;
// 3sec hurtel BLURRING hiigdej duusna.
let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    //tehdee load tooluur ni 100 hureed zogsoh nohtsliig setInterval-iig clearInterval-aar zogsoono.
    clearInterval(int);
  }
  // tooniihoo text-nd `template string`-eer 1, 1-eer nemegdeed 100 dr zogsson hurtelh loadiin huwisagchaa ogno.
  loadText.innerText = `${load}%`;
  //loadText.textContent = load + "%";

  //load text ni 0-ees 100 hurtel toolohod OPACITY 1-ees 0 bolj text ni alga bolson bol zuragnii BLUR maani 0px-ees 30px bolj zurgiig budegrvvlew.
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  big.style.filter = `blur(${scale(load, 0, 100, 0, 30)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
