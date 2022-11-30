document.addEventListener("DOMContentLoaded", function(){
    let step = 0;

    const buttons = document.querySelector(".buttons");
    const nextButton = document.getElementById("reg_next_button");
    const prevButton = document.getElementById("reg_prev_button");

    const Login = function() {

        document.getElementsByClassName('transition-bg')[0].style.display = 'block';
        document.getElementsByClassName('transition-bg')[0].style.zIndex = '999';
    
        setTimeout(() => {
            document.getElementsByClassName('transition-bg')[0].className = 'transition-bg transition-bg-show';
            document.getElementsByClassName('loader-container')[0].style.display = 'flex';
        }, 0);   
        
        setTimeout(() => {
            document.getElementsByClassName('loader-container')[0].style.opacity = '1';
            document.getElementsByClassName('main-container')[0].style.display = 'none';
            document.body.style.overflow = 'hidden';
        },350);
        document.body.style.overflow = 'auto';
    }

    const pages = document.getElementsByClassName("reg-form-inputs-container");

    const editPage = function(newStep){
        isNext = newStep > step;

        if (newStep != pages.length && newStep >= 0) {
            console.log(newStep);
            pages[step].classList = "reg-form-inputs-container";
            setTimeout(function(){
                pages[step].style.display = "none";
                setTimeout(function(){
                    pages[newStep].style.display = "block";
                    pages[newStep].classList = "reg-form-inputs-container reg-form-inputs-container-show";
                    step = newStep;
                },0);
            },200);
        }

        if ( isNext ) {
            if( newStep === 1 ) {
                prevButton.style.display = "block";
                nextButton.style.position = "absolute";
                setTimeout(function(){
                    buttons.style.width = "250px";
                    prevButton.style.width = nextButton.style.width = "115px";
                    prevButton.style.opacity = "1";
                },0);
                setTimeout(function(){
                    nextButton.style.position = "";
                },15);
            }
            if ( newStep+1 === pages.length ) {
                nextButton.innerHTML = "ГОТОВО";
            }
            if ( newStep === pages.length ) {
                Login();
            }
        } else {
            if( newStep === 0 ) {
                prevButton.style.width = "0px";
                prevButton.style.opacity = "0";
                nextButton.style.width = "215px";
                buttons.style.width = "215px";
                setTimeout(function(){
                    prevButton.style.display = "none";
                },155);
            } 
            if ( step+1 === pages.length ) {
                nextButton.innerHTML = "ДАЛЕЕ";
            }
        }
    };

    nextButton.addEventListener("click", function(e){
        e.preventDefault();
        editPage(step+1);
    });
    prevButton.addEventListener("click", function(e){
        e.preventDefault();
        editPage(step-1);
    });
    window.addEventListener('keydown', (event) => {
        const inputs = document.getElementsByTagName("input")
        for (let i=0; i<inputs.length; i++) inputs[i].blur();
        if(event.keyCode === 13 && !event.repeat)
            editPage(step+1);
        else
            return;
    });
});