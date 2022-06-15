const submitBtn = document.querySelector("button");
const post = document.querySelector(".post");
const starWidget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
const feedbackPost = document.getElementsByClassName("feedback-post")[0];
const textArea = document.getElementsByClassName("textarea")[0];
const openFeedbackBtn = document.getElementsByClassName("open-feedback-btn")[0];
const feedbackContainer = document.getElementsByClassName(
  "feedback-container "
)[0];
console.log(feedbackContainer);
let textAreaValue = "";

// bichsen setgegdel-ee textarea tag-aas barij awah
textArea.addEventListener("input", (event) => {
  textAreaValue = event.target.value;
});

// ilgeeh towchin dr darahad bichsen textiig hadgalah
submitBtn.addEventListener("click", () => {
  console.log(textAreaValue);

  feedbackPost.innerHTML = textAreaValue;

  starWidget.style.display = "none";
  post.style.display = "block";

  editBtn.onclick = () => {
    starWidget.style.display = "block";
    post.style.display = "none";
  };
});

//
openFeedbackBtn.addEventListener("click", () => {
  feedbackContainer.classList.add("show");
});
