const logininput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const greeting2 = document.querySelector("#greeting2");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLgoinSubmit(event) {
  event.preventDefault();
  const username = logininput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLgoinSubmit);
} else {
  greeting.innerText = `hello ${savedUsername}`;
  greeting2.innerText = "what is your main focus for today?";
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting2.classList.remove(HIDDEN_CLASSNAME);
}
