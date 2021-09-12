const morebutton = document.querySelector(".more_button");
const more_contents = document.querySelector("#more");
const xbutton = document.querySelector(".x_button");
// function openmore(event) {
//   event.preventDefault();
//   more_contents.classList.toggle("hidden_styled");
// }
function openmore() {
  more_contents.style.width = "400px";
}
function closemore() {
  more_contents.style.width = "0px";
}
morebutton.addEventListener("click", openmore);
xbutton.addEventListener("click", closemore);
