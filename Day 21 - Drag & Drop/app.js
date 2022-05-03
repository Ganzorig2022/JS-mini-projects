const fill = document.querySelector(".fill");
// 4n shirheg".empty" class-tai array butsaana.
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// DIV dotor zurgan dr darahad ".hold" class ajillaj zuragnii gaduur RED bolno.
function dragStart() {
  this.className += " hold";
  // ".invisible" class
  setTimeout(() => {
    (this.className = "invisible"), 0;
  });
}
// Zurgaa div-eesee chireed mouse-aa awahad ".empty" class ajillaj hooson bolno.
function dragEnd() {
  this.className = "fill";
}

// Zurgaa div-eesee chireed oor DIV rvv zooh agshind preventDefault ajillasnaar daraagin DIV dotor zurag maani oroh bolomjtoi bolno.
function dragOver(e) {
  e.preventDefault();
}

// Zurgaa div-eesee chireed oor DIV rvv zoohod ".hovered" class ajillaj background, border edr ni oorchlogdono.
function dragEnter(e) {
  e.preventDefault();
  //   this.className += " hovered";
  this.classList.add("hovered");
}

// Zurgaa div-eesee chireed gargahad ".empty" class ajillaj hooson bolno.
function dragLeave() {
  this.className += "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
  console.log("drop");
}
