const title = document.querySelector(".title");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const logoutbtn = document.querySelector(".Logout-btn");
const greeting = document.querySelector(".greeting");
const content = document.querySelector(".content");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username.toUpperCase()}`;

    title.classList.add("disappear")
    title.classList.remove("appear")

    setTimeout(function() {
        title.classList.add(HIDDEN_CLASSNAME)},400);

    content.classList.remove(HIDDEN_CLASSNAME);
    content.classList.remove("disappear")
    content.classList.add("appear")

    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutbtn.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    title.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
} else {
    paintGreetings(savedUsername)
}

function logout() {
    alert("Good bye")
    loginInput.value = "";
    localStorage.removeItem("username");
    greeting.classList.add(HIDDEN_CLASSNAME)

    title.classList.remove(HIDDEN_CLASSNAME)
    title.classList.remove("disappear")
    title.classList.add("appear")

    content.classList.remove("appear")
    content.classList.add("disappear")
    
    setTimeout(function() {
        content.classList.add(HIDDEN_CLASSNAME)},400);
    

    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutbtn.classList.add(HIDDEN_CLASSNAME)
}

logoutbtn.addEventListener("click", logout)