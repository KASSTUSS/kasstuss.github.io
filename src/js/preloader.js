const logoContainer = document.getElementsByClassName("logo-container");
const preloaderBG = document.getElementsByClassName("preloader-bg");

document.addEventListener("DOMContentLoaded", function(){
    setInterval(function(){
        alert(1);
        logoContainer[0].classList = "logo-container";
        preloaderBG[0].classList = "preloader-bg preloader-bg-hidden";
        document.body.style.overflow = "hidden";
        setTimeout(function(){
            preloaderBG[0].style.display = "none";
            document.body.style.overflow = "";
        },500);
    },1500);
});