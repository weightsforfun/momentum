const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let todos = [];
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function deletetodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}
function PaintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  li.classList.add("todo-thing");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deletetodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDo.text;
  toDoList.appendChild(li);
}
function todosubmitHandle(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = " ";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  todos.push(newToDoObj);
  PaintToDo(newToDoObj);
  saveTodos();
}
toDoForm.addEventListener("submit", todosubmitHandle);

const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(PaintToDo);
}
