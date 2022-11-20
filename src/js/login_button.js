const loginButton = document.getElementById('login_button');

const Login = () => {
    $('.transition-bg').show();
    $('.transition-bg').css({
        'z-index': '999'
    });
    setTimeout(() => {
        document.getElementsByClassName('transition-bg')[0].className = 'transition-bg transition-bg-show';
        $('.loader-container').css({
            'display': 'flex'
        });
    }, 1);   
    
    setTimeout(() => {
        $('.loader-container').css({
            'opacity': '1'
        });
        $('html').css({
            'overflow': 'hidden'
        });
        $('.main-container').css({
            'display': 'none'
        });
    },350);
}

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