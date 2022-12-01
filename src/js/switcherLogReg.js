const loginElems = [
    document.getElementsByClassName("to-reg-block")[0],
    document.getElementsByClassName("login-block")[0]
];

const regElems = [
    document.getElementsByClassName("to-login-block")[0],
    document.getElementsByClassName("reg-block")[0]
];

const toLogin = function(){
    event.preventDefault();
    regElems[0].style.display = "none";
    regElems[1].style.display = "none";
    loginElems[0].style.display = "flex";
    loginElems[1].style.display = "block";
};

const toReg = function(){
    event.preventDefault();
    regElems[0].style.display = "flex";
    regElems[1].style.display = "block";
    loginElems[0].style.display = "none";
    loginElems[1].style.display = "none";
};