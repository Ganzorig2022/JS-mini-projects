// button element-ee selectelne.
const toggles = document.querySelectorAll(".faq-toggle");

// button dotroo "X" "zow" gesen 2element-teu uchir LOOP hiiw.
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // button-ii parent DIV-d ".active"class nemeh, hasah.
    toggle.parentNode.classList.toggle("active");
  });
});
