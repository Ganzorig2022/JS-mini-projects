const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const ratingContainer = document.querySelector(".ratings-container");
let selectedRating = "Satisfied";

// EVENT BUBBLING. "rating-container" Parent element dotor bga button dr darahad PARENT element event barigdana.
ratingContainer.addEventListener("click", (e) => {
  // ".rating" class-tai DIV element dotor EMOJI dr darahad...
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    // ".rating" parent div dr ".active" class nemeh
    e.target.parentNode.classList.add("active");

    // emoji dr darahad ter elementnii yag door bga elementiin textContent-iig barij awaw.
    selectedRating = e.target.nextElementSibling.innerHTML;
    console.log(selectedRating);
  }
});

// send button darah event
sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});

// darah bolgond omnoc active class-aa arilgana.
function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
