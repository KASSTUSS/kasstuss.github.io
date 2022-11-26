import Login from "./login.mjs";

const loginButton = document.getElementById('login_button');

loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    Login();
});

window.addEventListener('keydown', (event) => {
    if(event.keyCode === 13 && !event.repeat) 
        Login();
    else
        return;
});