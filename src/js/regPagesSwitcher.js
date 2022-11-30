document.addEventListener("DOMContentLoaded", function(){
    let step = 0;
    let isLastPage = false;

    const buttons = document.querySelector(".buttons");
    const nextButton = document.getElementById("reg_next_button");
    const prevButton = document.getElementById("reg_prev_button");

    const pages = document.getElementsByClassName("reg-form-inputs-container");

    const editPage = function(newStep){
        isNext = newStep > step;

        if (newStep != pages.length) {
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
                isLastPage = true;
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
});