import Login from "./login.mjs";

const regButton = document.getElementById('reg_button');

regButton.addEventListener('click', (event) => {
    event.preventDefault();
    Login();
});

window.addEventListener('keydown', (event) => {
    if(event.keyCode === 13 && !event.repeat) 
        Login();
    else
        return;
});