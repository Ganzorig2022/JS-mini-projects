const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Dark mode-Light mode hseg. (e.target gedeg TOGGLE towch-oo helj bga yum.)
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

// new Date() function ni "Sun May 01 2022 21:07:37 GMT+0800 (Ulaanbaatar Standard Time)" gargaj irdeg belen function yum.
function setTime() {
  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth(); //sariig haruulna.
  const day = time.getDay(); //odriig haruulna.
  const hours = time.getHours(); //tsagiig haruulna. 21:00 etc
  const hoursForClock = hours % 12; //21:00 => 09:00pm bolgono.
  const minutes = time.getMinutes(); //
  const seconds = time.getSeconds(); //
  const ampm = hours >= 12 ? "PM" : "AM";

  // tsagiin zvvg hodolgodog heseg
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  // minutiin zvvg hodolgodog heseg
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  // second-iin zvvg hodolgodog heseg
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  // OGNOO-nii heseg. time DIV, date DIV-vvdiin innerHTML rvv days[mon, tues, thu, wed...] geh met array luu day=time.getDay() function-aas odriin toog hiisneer innerHTML ni oorchlogdono.
  timeEl.innerHTML = `${hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();

// setTime() function-iig 1sec tutamd gej ogsnoor bvh TIME, HOUR, MIN, SEC, DATE tasraltgv ajillana.
setInterval(setTime, 1000);
