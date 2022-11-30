const logoContainer = document.getElementsByClassName("logo-container");
const preloaderBG = document.getElementsByClassName("preloader-bg");

document.addEventListener("DOMContentLoaded", function(){
    document.style.overflow = "hidden";
    setInterval(function(){
        logoContainer[0].classList = "logo-container";
        preloaderBG[0].classList = "preloader-bg preloader-bg-hidden";
        setTimeout(function(){
            preloaderBG[0].style.display = "none";
            document.style.overflow = "";
        },500);
    },1500);
});