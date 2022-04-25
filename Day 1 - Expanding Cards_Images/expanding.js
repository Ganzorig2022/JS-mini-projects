const panels = document.querySelectorAll(".panel");
// console.log(panels);

// forEach dawtalt ashiglahda arrow function ashiglaw. Panel ni parameter yum. Duriin nereer ogch bolno.
panels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", () => {
    removeActiveClasses();
    // zurgan dr darhad active class ajillaw.
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
