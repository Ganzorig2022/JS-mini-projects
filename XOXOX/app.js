const boxBtn = document.getElementsByClassName("box");
// // boxBtn.forEach((event) => {
// //     event.
// // });

for (let i = 0; i < boxBtn.length; i++) {
  boxBtn[i].addEventListener("click", function (event) {
    console.log(boxBtn[i]);
    // boxBtn[i].classList.add("cirlce");
    document.getElementsByTagName("span")[i].classList.toggle("circle");
    // boxBtn[i].childNodes[0].class;
    // boxBtn[i].children.style.display = "block";
  });
}
