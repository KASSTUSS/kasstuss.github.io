const logoContainer = document.getElementsByClassName("logo-container");
const preloaderBG = document.getElementsByClassName("preloader-bg");

document.addEventListener("DOMContentLoaded", function(){
    setInterval(function(){
        logoContainer[0].classList = "logo-container";
        preloaderBG[0].classList = "preloader-bg preloader-bg-hidden";
        setTimeout(function(){
            preloaderBG[0].style.display = "none";
        },500);
    },1500);
});