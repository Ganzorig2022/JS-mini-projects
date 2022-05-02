const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
    });

    todoEl.addEventListener("contextmenu", (e) => {
      // preventDefault-iig idewhjvvlehed mouse2-oo darhad garch irdeg menu garch irehe bolino.
      e.preventDefault();
      // buhniig DOM-oos ustgana.
      todoEl.remove();
    });

    todosUL.appendChild(todoEl);
    input.value = "";
  }
}
